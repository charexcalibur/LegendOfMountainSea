const path = require('path');

module.exports = {
	output: {
		path: path.resolve(__dirname,'../'),
		filename: 'loms.game.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: [
							require('babel-plugin-transform-object-rest-spread'),
							require('babel-plugin-transform-class-properties'),
						],
					},
				},
			},
		],
	},
	resolve: {
		alias: {
			'pixi': path.resolve(__dirname, '/node_modules/pixi.js/bin/pixi.min.js'),
		},
	},
};