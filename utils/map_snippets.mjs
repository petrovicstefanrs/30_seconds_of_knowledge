import fs, { promises as fsp } from 'fs';
import crypto from 'crypto';
import pMap from 'p-map';
import path from 'path';
import frontmatter from 'front-matter';

const LIBRARIES = [
  'git',
  'javascript',
  'react',
  'python',
  'css',
  'php',
  'dart',
  'golang',
  'csharp',
  'ruby',
  'ramda',
  'interview',
  'cpp',
  'html',
];

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

const parseTitleFromSnippet = (snippet, level = 1) => {
  const titleLevels = {
    1: '#',
    2: '##',
    3: '###',
    4: '####',
    5: '#####',
    6: '######',
  };
  const regex = `^(?:${titleLevels[level]}){1}([^#].*)$`;
  const titleRegex = new RegExp(regex, 'gm');
  const titles = titleRegex.exec(snippet);
  const title = titles ? titles[1].trim() : '';
  return title;
};

const parseSnippet = ({ data, filename, id, language, tags: passedTags }) => {
  const {
    body: content,
    attributes: {
      /**
       * NOTE: Default the `firstSeen` to the date 30SoK v1
       * was released initially on Product Hunt
       */
      firstSeen = '2019-02-06T00:00:00Z',
      lastUpdated = firstSeen,
      tags,
      title,
      shortTitle,
      ...restAttributes
    },
  } = frontmatter(data);

  /**
   * NOTE: `Interview` and `Ramda` snippets have their title
   * as H3 (###) on the first line
   */
  let parsedTitle;
  if (['interview', 'ramda'].includes(language)) {
    parsedTitle = parseTitleFromSnippet(content, 3);
  }

  /**
   * NOTE: `Ruby`snippets have their title
   * as H3 (###) or H2 (##) on the first line
   */
  if (language === 'ruby') {
    parsedTitle = parseTitleFromSnippet(content, 3);
    if (!parsedTitle) {
      parsedTitle = parseTitleFromSnippet(content, 2);
    }
  }

  /**
   * NOTE: `C++`snippets have their title
   * as H1 (#) on the first line
   */
  if (language === 'cpp') {
    parsedTitle = parseTitleFromSnippet(content, 1);
  }

  const parsedTags =
    typeof tags === 'string'
      ? tags.split(',')
      : Array.isArray(tags)
      ? tags
      : [];

  return {
    id,
    filename,
    content,
    language,
    firstSeen: formatDate(firstSeen),
    lastUpdated: formatDate(lastUpdated),
    tags: [...parsedTags, ...(passedTags || [])],
    title: title || parsedTitle,
    ...restAttributes,
  };
};

/**
 * NOTE: `C++` library doesn't hold it's snippets inside a snippets folder.
 * Instead, snippets are divided amongst a few different folders,
 * so we need to go through those to map the actuall snippet files.
 */
const mapCPPLibraryFiles = () => {
  const basePath = path.join(process.cwd(), `src/assets/snippet_sources/cpp`);

  const snippetFolders = [
    'algorithm',
    'list',
    'map',
    'priority_queue',
    'queue',
    'set',
    'stack',
    'unordered_map',
    'vector',
  ];

  let filePaths = [];

  snippetFolders.forEach((folder) => {
    const folderBasePath = path.join(basePath, `/${folder}`);

    const snippetPaths = fs
      .readdirSync(folderBasePath)
      .filter(
        (file) => file.slice(-3) === '.md' && file.toLowerCase() !== 'readme.md'
      )
      .map((file) => {
        const snippetId = crypto
          .createHash('sha256')
          .update(`cpp/${folder}/${file}`)
          .digest('hex');
        return {
          id: snippetId,
          src: path.join(folderBasePath, `/${file}`),
          filename: file,
          /**
           * NOTE: For `C++` library, the folder name of the folder that
           * holds the snippets is a tag for that group of snippets
           */
          tags: [folder],
        };
      });

    filePaths = [...filePaths, ...snippetPaths];
  });

  return filePaths;
};

const mapLibraryFiles = async (lib) => {
  const basePath = path.join(
    process.cwd(),
    `src/assets/snippet_sources/${lib}`
  );

  let filePaths;

  if (lib === 'cpp') {
    filePaths = mapCPPLibraryFiles();
  } else {
    filePaths = fs
      .readdirSync(basePath)
      .filter((file) => file.slice(-3) === '.md')
      .map((file) => {
        const snippetId = crypto
          .createHash('sha256')
          .update(`${lib}/${file}`)
          .digest('hex');
        return {
          id: snippetId,
          src: path.join(basePath, `/${file}`),
          filename: file,
        };
      });
  }

  const mapper = async (fp) => {
    const fileContents = await fsp.readFile(fp.src, 'utf8');
    const parsedSnippet = parseSnippet({
      data: fileContents,
      filename: fp.filename,
      id: fp.id,
      language: lib,
      /**
       * NOTE: Only `C++` will have tags inside the `fp` object.
       * All other libraris contain the tags inside
       * the snippet file itself, or don't have any tags at all.
       */
      ...(fp.tags ? { tags: fp.tags } : {}),
    });
    return parsedSnippet;
  };

  const results = await pMap(filePaths, mapper);
  const mappedSnippets = results.reduce((acc, snippet) => {
    acc[snippet.id] = snippet;
    return acc;
  }, {});
  return mappedSnippets;
};

const mapAllLibraries = async () => {
  const mapper = async (library) => {
    const librarySnippets = await mapLibraryFiles(library);
    return {
      language: library,
      snippets: librarySnippets,
    };
  };

  const results = await pMap(LIBRARIES, mapper);
  const mappedLibraries = results.reduce((acc, lib) => {
    acc[lib.language] = lib.snippets;
    return acc;
  }, {});

  return mappedLibraries;
};

const writeSnippetMap = async () => {
  const snippets = await mapAllLibraries();
  const saveDestination = path.join(process.cwd(), `src/api/data.js`);
  const data = `module.exports = ${JSON.stringify(snippets)}`;
  fs.writeFileSync(saveDestination, data);
  console.log(`Snippet map saved to ${saveDestination}`);
};

writeSnippetMap();
