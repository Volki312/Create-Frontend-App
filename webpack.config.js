const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [
					{
						loader: "svg-url-loader",
						options: {
							limit: 10000
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader"
					}
				]
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /(node_modules|bower_components|elm-stuff)/
			},
			{
				test: /\.vue$/,
				exclude: /(node_modules|bower_components|elm-stuff)/,
				loader: "vue-loader"
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components|elm-stuff)/,
				loader: "babel-loader",
				options: { presets: ["@babel/preset-env"] }
			},
			{
				test: /\.elm$/,
				exclude: /(node_modules|bower_components|elm-stuff)/,
				use: [
					{ loader: "elm-hot-webpack-loader" },
					{ loader: "elm-webpack-loader" }
				]
			},
			{
				test: /\.svelte$/,
				exclude: /(node_modules|bower_components|elm-stuff)/,
				use: {
					loader: "svelte-loader",
					options: {
						hotReload: true
					}
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								fiber: require("fibers")
							}
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			"react-dom": "@hot-loader/react-dom",
			svelte: path.resolve("node_modules", "svelte")
		},
		extensions: [
			"*",
			".js",
			".jsx",
			".ts",
			".tsx",
			".elm",
			".mjs",
			".svelte",
			".vue"
		],
		mainFields: ["svelte", "browser", "module", "main"]
	},
	output: {
		path: path.resolve(__dirname, "build/"),
		publicPath: "/",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "public/"),
		port: 3000,
		host: "localhost",
		publicPath: "http://localhost:3000/",
		historyApiFallback: true,
		open: true,
		// hotOnly: true,
		hot: false,
		clientLogLevel: "none"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, "./public/index.html")
		}),
		new webpack.DefinePlugin({
			__REACT_DEVTOOLS_GLOBAL_HOOK__: "({ isDisabled: true })"
		})
	]
};
