const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
var precss  = require('precss');
const autoprefixer= require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const px2remOpts = {
  rootValue: 100,
  propWhiteList: [],
};
module.exports = {
	entry:'./src/js/index.js',
	devtool:'inline-source-map',
	devServer:{
		contentBase:'./dist',
		hot:true,
	},
	output:{
		filename: "app.js",
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
	    mainFiles: ["index.web","index"],// 这里哦
	    modules: [path.resolve(__dirname, "src"), "node_modules"],
	    extensions: [
	      '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx',
	      '.js',
	      '.jsx',
	      '.react.js',
	    ],
	    mainFields: [
	      'browser',
	      'jsnext:main',
	      'main',
	    ],
	    alias:{
		  app:path.resolve(__dirname,'src/js'),
		  style:path.resolve(__dirname,'src/styles'),
		  image:path.resolve(__dirname,'src/images'),
		  svgsfile:path.resolve(__dirname,'src/svgsfile')

		}
	},
	module:{
		rules:[
			{	
				test:/\.js$/,
				exclude: /node_modules/,
				use:{
					loader: 'babel-loader',
					options:{
				          plugins: [
				            ["import", [{ "style": "css", "libraryName": "antd-mobile" }]]
				          ]
					}
				}
			},
			{
			  test: /\.(css)$/,
			  use: [
			  	'style-loader',
			  	'css-loader',
			  	 {
				    loader: 'postcss-loader',
				    options: {
				        plugins: [
				          precss,
				          autoprefixer,
				          pxtorem(px2remOpts)
				        ]
				      }
				  }
			  	],// 一定要有style-loader
			  include: [
			      path.resolve(__dirname, "node_modules"), // 非常关键
			      path.resolve(__dirname, "src")  // 还需要把你项目里的css，less所在的文件夹内敛
			  ]
			},
			{
				test:/\.(png|jpg|gif)$/,
				exclude:[
					/\.less$/,
					/\.svg$/
					],
				use:[
					'file-loader'
				]
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf)$/,
				use:[
					'file-loader'
				]
			},
			{
	            test: /\.(svg)$/i,
	            loader: 'svg-sprite-loader',
	            include: [
	                require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
	                path.resolve(__dirname, 'src/svgsfile'),  // 自己私人的 svg 存放目录
	            ]
	        }
		]
	},

	plugins:[
		new CleanWebpackPlugin(['dist']),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			title: '开发',
			hash:true,
			inject:'body'
		})
	]
}