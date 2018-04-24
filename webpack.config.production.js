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
		proxy: {
			'/cf024bb815a93131ce9fed91b1f9dafa43a3c557e9be66e66fd76df5c64f10fe/api': {
				target: "http://localhost:8000",
			}
		}
	},
});
