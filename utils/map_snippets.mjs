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

const parseSnippet = ({ data, filename, id, language }) => {
  const {
    body: content,
    attributes: {
      /**
       * NOTE: Default the `firstSeen` to the date 30SoK v1
       * was released initially on Product Hunt
       */
      firstSeen = '2019-02-06T00:00:00Z',
      lastUpdated = firstSeen,
      tags = '',
      title,
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

  return {
    id,
    filename,
    content,
    language,
    firstSeen: formatDate(firstSeen),
    lastUpdated: formatDate(lastUpdated),
    tags: tags.split(','),
    title: title || parsedTitle,
    ...restAttributes,
  };
};

const mapLibraryFiles = async (lib) => {
  const basePath = path.join(
    process.cwd(),
    `src/assets/snippet_sources/${lib}`
  );

  const filePaths = fs
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

  const mapper = async (fp) => {
    const fileContents = await fsp.readFile(fp.src, 'utf8');
    const parsedSnippet = parseSnippet({
      data: fileContents,
      filename: fp.filename,
      id: fp.id,
      language: lib,
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
