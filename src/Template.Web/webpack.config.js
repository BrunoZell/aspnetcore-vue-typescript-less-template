const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CheckerPlugin, TsConfigPathsPlugin } = require("awesome-typescript-loader");
const bundleOutputDir = "./wwwroot/dist";

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    return [{
        stats: { modules: false },
        context: __dirname,
        resolve: {
            extensions: [".js", ".ts"],
            plugins: [
                new TsConfigPathsPlugin()
            ]
        },
        entry: {
            "main": ["babel-polyfill", "./ClientApp/boot.ts"]
        },
        module: {
            rules: [
                {
                    test: /\.vue\.html$/, include: /ClientApp/, loader: "vue-loader",
                    options: {
                        loaders: {
                            js: ["babel-loader", "awesome-typescript-loader?silent=true"],
                            css: ["style-loader", "css-loader", "less-loader"]
                        }
                    }
                },
                { test: /\.ts$/, include: /ClientApp/, use: ["babel-loader", "awesome-typescript-loader?silent=true"] },
                { test: /\.less$/, include: /ClientApp/, use: "less-loader" },
                { test: /\.(png|jpg|jpeg|gif|svg)$/, use: "url-loader?limit=25000" }
            ]
        },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: "[name].js",
            publicPath: "dist/"
        },
        plugins: [
            new CheckerPlugin(),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify(isDevBuild ? "development" : "production")
                }
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require("./wwwroot/dist/vendor-manifest.json")
            })
        ].concat(isDevBuild ? [
            // Plugins that apply in development builds only
            new webpack.SourceMapDevToolPlugin({
                filename: "[file].map", // Remove this line if you prefer inline source maps
                moduleFilenameTemplate: path.relative(bundleOutputDir, "[resourcePath]") // Point sourcemap entries to the original file locations on disk
            })
        ] : [
                // Plugins that apply in production builds only
                new webpack.optimize.UglifyJsPlugin(),
                new ExtractTextPlugin("site.css")
            ])
    }];
};
