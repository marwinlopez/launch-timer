module.exports = {
	entry: [
		'./source/App.js'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module:{
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_mudeles/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015','react']
			}
		}]
	}
};