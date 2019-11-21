const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
	const environment = env || 'production';
		
	return {
		mode: environment,
		entry: './src/containers/App.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'app.' + environment + '.bundle.js'
		},
		module: {
			rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
        		test: /\.css$/,
        		use: [
            		{ loader: 'style-loader'},
            		{
                		loader: 'css-loader',
                			options: {
                    			modules: true
                			}		
            			}
        			]
    			}
			]
		},
		plugins: [new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
			inject: 'body'
		})]
	}
};
