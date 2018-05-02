const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.config.common');

module.exports = merge(webpackCommonConfig, {
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			minimize: true,
			sourceMap: true
		}),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
	],
	devtool: "source-map",
	devServer: {
		compress: true,
		host: '0.0.0.0',
		proxy: {
			'/9988113/api': {
				target: "http://localhost:8000",
			}
		}
	},
});
