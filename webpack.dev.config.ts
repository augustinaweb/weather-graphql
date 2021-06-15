import path from 'path';
import * as webpack from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

interface Configuration extends webpack.Configuration {
	devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
	mode: 'development',
	output: {
		publicPath: '/'
	},
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript'
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin({
			async: false
		}),
		new ESLintPlugin({
			failOnError: false,
			emitWarning: true,
			extensions: ['js', 'jsx', 'ts', 'tsx']
		})
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		historyApiFallback: true,
		port: 5000,
		open: true,
		hot: true
	}
};

export default config;
