const { VueLoaderPlugin } = require("vue-loader");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const path = require("path");
const webpack = require("webpack");

module.exports = [
    {
        name: "vendor",
        mode: "development",
        entry: [
            "vue",
            "vue-router",
            "vuex"
        ],
        output: {
            path: path.resolve(__dirname, "./wwwroot/dist"),
            filename: "vendor.js",
            library: "vendor_[hash]"
        },
        plugins: [
            new webpack.DllPlugin({
                name: "vendor_[hash]",
                path: path.resolve(__dirname, "./wwwroot/dist/manifest.json")
            })
        ]
    },
    {
        name: "main",
        mode: "development",
        dependencies: ["vendor"],
        entry: ["babel-polyfill", "./ClientApp/boot.ts"],
        output: {
            path: path.join(__dirname, "./wwwroot/dist"),
            filename: "[name].js",
            publicPath: "dist/"
        },
        resolve: {
            // Makes sure the paths set in tsconfig will load (baseurl)
            extensions: [".js", ".ts"],
            plugins: [new TsConfigPathsPlugin()]
        },
        module: {
            rules: [
                {
                    test: /\.vue\.html$/,
                    include: /ClientApp/,
                    loader: "vue-loader"
                },
                {
                    test: /\.ts$/,
                    include: /ClientApp/,
                    use: ["babel-loader", "awesome-typescript-loader?silent=true"]
                },
                {
                    test: /\.less$/,
                    include: /ClientApp/,
                    use: ["style-loader", "css-loader", "less-loader"]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new webpack.DllReferencePlugin({
                manifest: path.resolve(__dirname, "./wwwroot/dist/manifest.json")
            })
        ]
    }];
