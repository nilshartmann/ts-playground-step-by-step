const webpack = require("webpack");
module.exports = {
	entry: [
		"react-hot-loader/patch",
		"./src/index.tsx"
	],

	output: {
		path: __dirname + '/public/dist/',
		filename: "main.js",
		publicPath: '/dist'
	},

	devtool: 'inline-source-map',

	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				use: [
					"react-hot-loader/webpack",
					'awesome-typescript-loader',
				],
				exclude: /node_modules/,
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},
	devServer: {
		hot: true
	}
};
