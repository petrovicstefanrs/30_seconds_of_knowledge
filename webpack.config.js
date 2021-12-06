const webpack = require('webpack');
const path = require('path');
const fileSystem = require('fs-extra');
const loaderUtils = require('loader-utils');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const env = require('./utils/env');

let alias = {
  'react-dom': '@hot-loader/react-dom',
};

const ASSET_PATH = process.env.ASSET_PATH || '/';
const IS_PRODUCTION = env.NODE_ENV === 'production';

// load the secrets
const SECRETS_PATH = path.join(__dirname, 'secrets.' + env.NODE_ENV + '.js');

const FILE_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'svg',
  'ttf',
  'woff',
  'woff2',
];

// Build Target Constants
const AVAILABLE_TARGETS = ['chromium', 'gecko', 'opera', 'safari'];
const TARGET_SPECIFIC_MANIFEST = {
  chromium: {
    offline_enabled: true,
    chrome_url_overrides: {
      newtab: 'newtab.html',
    },
  },
  opera: {},
  gecko: {
    manifest_version: 2,
    web_accessible_resources: undefined,
    permissions: ['storage', 'clipboardWrite'],
    action: undefined,
    browser_action: {
      default_popup: 'popup.html',
      default_icon: 'icon_32.png',
    },
    options_page: undefined,
    options_ui: {
      page: 'options.html',
    },
    chrome_url_overrides: {
      newtab: 'newtab.html',
    },
    content_security_policy:
      "script-src 'self' 'unsafe-eval'; object-src 'self'",
    browser_specific_settings: {
      gecko: {
        id: '30secondsofknowledge@petrovicstefan.rs',
        strict_min_version: '68.0',
      },
    },
  },
  safari: {
    manifest_version: 2,
    chrome_url_overrides: {
      newtab: 'newtab.html',
    },
    options_page: 'options.html',
    browser_action: {
      default_popup: 'popup.html',
      default_icon: 'icon_32.png',
    },
    permissions: ['storage', 'clipboardWrite'],
    browser_specific_settings: {
      safari: {
        strict_min_version: '15',
      },
    },
  },
};

// Load The Build Target and Validate
const TARGET = process.env.TARGET;
const targetValid =
  TARGET &&
  AVAILABLE_TARGETS.some((target) => {
    return target === TARGET;
  });

if (!targetValid) {
  throw new Error(
    `Build target not defined! Must be one of: [${AVAILABLE_TARGETS.toString()}]`
  );
}

if (fileSystem.existsSync(SECRETS_PATH)) {
  alias['secrets'] = SECRETS_PATH;
}

const createStyleLoaders = (cssModulesEnabled) => {
  let modules = cssModulesEnabled;
  if (modules && !IS_PRODUCTION) {
    /**
     * NOTE: Produce human readable class names in development mode.
     * Example: `Component_className` instead of having a random hash
     */
    modules = {
      getLocalIdent: (context, _localIdentName, localName, options) => {
        const className = loaderUtils.interpolateName(
          context,
          `[name]_${localName}`,
          options
        );
        return className.replace('.module_', '_').replace(/\./g, '_');
      },
    };
  }
  return [
    !IS_PRODUCTION && 'style-loader',
    IS_PRODUCTION && {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true,
        modules,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-preset-env'],
        },
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ].filter(Boolean);
};

var options = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    newtab: path.join(__dirname, 'src', 'pages', 'NewTab', 'index.js'),
    settings: path.join(__dirname, 'src', 'pages', 'Settings', 'index.js'),
    popup: path.join(__dirname, 'src', 'pages', 'Popup', 'index.js'),
    favourites: path.join(__dirname, 'src', 'pages', 'Favourites', 'index.js'),
    allsnippets: path.join(
      __dirname,
      'src',
      'pages',
      'AllSnippetsTab',
      'index.js'
    ),
    viewtab: path.join(__dirname, 'src', 'pages', 'ViewTab', 'index.js'),
  },
  chromeExtensionBoilerplate: {
    notHotReload: ['devtools'],
  },
  output: {
    path: path.resolve(__dirname, `${TARGET}_build`),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: /(\.css|\.scss)$/,
        exclude: /\.module\.scss$/,
        use: createStyleLoaders(false),

        // https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
      },
      {
        test: /\.module\.scss$/,
        use: createStyleLoaders(true),
      },
      {
        test: /\.md$/,
        type: 'asset/resource',
        generator: {
          filename: '[path][id][ext]',
        },
        exclude: /node_modules/,
      },
      {
        test: new RegExp('.(' + FILE_EXTENSIONS.join('|') + ')$'),
        type: 'asset',
        generator: {
          filename: '[path][name][ext]',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'source-map-loader',
          },
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: alias,
    extensions: FILE_EXTENSIONS.map((extension) => '.' + extension).concat([
      '.js',
      '.jsx',
      '.css',
    ]),
    symlinks: false,
    fallback: {
      buffer: require.resolve('buffer'),
    },
  },
  plugins: [
    // clean the build folder
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    // expose and write the allowed env vars on the compiled bundle
    new webpack.EnvironmentPlugin({ ...process.env }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/manifest.json',
          to: path.join(__dirname, `${TARGET}_build`),
          force: true,
          transform: function (content, _path) {
            // generates the manifest file using the package.json informations
            return Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString()),
                ...TARGET_SPECIFIC_MANIFEST[TARGET],
              })
            );
          },
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/public',
          to: path.join(__dirname, `${TARGET}_build`),
          force: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'NewTab', 'index.html'),
      filename: 'newtab.html',
      chunks: ['newtab'],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'Settings', 'index.html'),
      filename: 'settings.html',
      chunks: ['settings'],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'Popup', 'index.html'),
      filename: 'popup.html',
      chunks: ['popup'],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        'src',
        'pages',
        'Favourites',
        'index.html'
      ),
      filename: 'favourites.html',
      chunks: ['favourites'],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        'src',
        'pages',
        'AllSnippetsTab',
        'index.html'
      ),
      filename: 'allsnippets.html',
      chunks: ['allsnippets'],
      cache: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'pages', 'ViewTab', 'index.html'),
      filename: 'viewtab.html',
      chunks: ['viewtab'],
      cache: false,
    }),
  ],
  infrastructureLogging: {
    level: 'info',
  },
};

if (!IS_PRODUCTION) {
  options.devtool = 'inline-source-map';
} else {
  options.optimization = {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  };
  options.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new ZipPlugin({
      path: __dirname,
      filename: `${TARGET}_build`,
      extension: 'zip',
    })
  );
}

module.exports = options;
