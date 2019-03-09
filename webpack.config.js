let webpack = require('webpack'),
	path = require('path'),
	fileSystem = require('fs'),
	env = require('./utils/env'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	WriteFilePlugin = require('write-file-webpack-plugin');

const FILE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'eot', 'otf', 'svg', 'ttf', 'woff', 'woff2'];

// Build Target Constants
const AVAILABLE_TARGETS = ['chromium', 'gecko'];
const TARGET_SPECIFIC_MANIFEST = {
	chromium: {
		offline_enabled: true,
	},
	gecko: {
		browser_specific_settings: {
			gecko: {
				id: '30secondsofknowledge@petrovicstefan.rs',
				strict_min_version: '42.0',
			},
		},
	},
};

// Load The Secrets
let alias = {};
let secretsPath = path.join(__dirname, 'secrets.' + env.NODE_ENV + '.js');
if (fileSystem.existsSync(secretsPath)) {
	alias['secrets'] = secretsPath;
}

// Load The Build Target and Validate
const TARGET = process.env.TARGET;
const targetValid =
	TARGET &&
	AVAILABLE_TARGETS.some(target => {
		return target === TARGET;
	});

if (!targetValid) {
	throw new Error(`Build target not defined! Must be one of: ['chromium', 'gecko']`);
}

// Webpack Options Object
let options = {
	mode: process.env.NODE_ENV || 'development',
	entry: {
		popup: path.join(__dirname, 'src', 'js', 'popup.js'),
		saved: path.join(__dirname, 'src', 'js', 'saved.js'),
		view: path.join(__dirname, 'src', 'js', 'view.js'),
		options: path.join(__dirname, 'src', 'js', 'options.js'),
		background: path.join(__dirname, 'src', 'js', 'background.js'),
		newtab: path.join(__dirname, 'src', 'js', 'newtab.js'),
	},
	output: {
		path: path.join(__dirname, `${TARGET}_build`),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: new RegExp('.(' + FILE_EXTENSIONS.join('|') + ')$'),
				loader: 'file-loader?name=[name].[ext]',
				exclude: /node_modules/,
			},
			{
				test: /\.md$/,
				loader: 'file-loader?name=[path][name].[ext]',
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		alias: alias,
		extensions: FILE_EXTENSIONS.map(extension => '.' + extension).concat(['.jsx', '.js', '.css']),
	},
	plugins: [
		// clean the build folder
		new CleanWebpackPlugin([`${TARGET}_build`]),
		// expose and write the allowed env vars on the compiled bundle
		new webpack.EnvironmentPlugin({...process.env}),
		new CopyWebpackPlugin([
			{
				from: 'src/manifest.json',
				transform: function(content, path) {
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
		]),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'popup.html'),
			filename: 'popup.html',
			chunks: ['popup'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'options.html'),
			filename: 'options.html',
			chunks: ['options'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'saved.html'),
			filename: 'saved.html',
			chunks: ['saved'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'view.html'),
			filename: 'view.html',
			chunks: ['view'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'background.html'),
			filename: 'background.html',
			chunks: ['background'],
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'newtab.html'),
			filename: 'newtab.html',
			chunks: ['newtab'],
		}),
		new WriteFilePlugin(),
	],
};

if (env.NODE_ENV === 'development') {
	options.devtool = 'cheap-module-eval-source-map';
}

module.exports = options;
