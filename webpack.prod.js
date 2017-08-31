const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var precss  = require('precss');
const autoprefixer= require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const px2remOpts = {
  rootValue: 100,
  propWhiteList: [],
};

module.exports = {
	entry:{
		index: './src/js/index',
		vendor: [
	      'react',
	      'react-dom',
	      'react-router',
	      'react-router-dom',
	      'react-redux',
	      'redux'
	    ]
	},

	devtool:'cheap-source-map',
	devServer:{
		contentBase:'./dist',
		hot:true
	},
	output:{
		filename: "[name].[hash].js",
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
				test:/\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
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
					]				
				})

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
	    new webpack.LoaderOptionsPlugin({
	    	minimize: true,
      		debug: false
	    }),
	    // webapck 会给编译好的代码片段一个id用来区分
	    // 而这个插件会让webpack在id分配上优化并保持一致性。
	    // 具体是的优化是：webpack就能够比对id的使用频率和分布来得出最短的id分配给使用频率高的模块
	    new webpack.optimize.UglifyJsPlugin({
		      beautify: false,
		      output:{
		        comments:false,
		      },
		      compress:{
		        warnings:false
		      }
	    }),
	   	new webpack.optimize.CommonsChunkPlugin({name:'vendor'} ),
	   	new webpack.HashedModuleIdsPlugin(),
    	new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			title: '开发',
			hash:true,
			inject:'body'
		})
	]
}