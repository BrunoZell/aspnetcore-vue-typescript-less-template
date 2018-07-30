const { VueLoaderPlugin } = require("vue-loader");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const path = require("path");

module.exports = {
    entry: {
        "main": "./ClientApp/boot.ts"
    },
    output: {
        path: path.join(__dirname, "./wwwroot/dist"),
        filename: "[name].js",
        publicPath: "dist/"
    },
    resolve: {
        // Makes sure the paths set in tsconfig will load (baseurl)
        extensions: [".js", ".ts"],
        plugins: [ new TsConfigPathsPlugin() ]
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
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.less$/,
                include: /ClientApp/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
};
