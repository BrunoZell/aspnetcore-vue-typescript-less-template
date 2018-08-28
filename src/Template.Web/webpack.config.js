const { VueLoaderPlugin } = require("vue-loader");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const path = require("path");

module.exports = env => {
    const isDevBuild = !(env && env.production);
    console.log("Webpack environment: " + (isDevBuild ? "development" : "production"));

    return {
        mode: isDevBuild ? "development" : "production",
        devtool: isDevBuild ? "inline-source-map" : "none",
        entry: {
            main: [
                "babel-polyfill",
                "vuetify/dist/vuetify.min.css",
                "material-design-icons-iconfont/dist/material-design-icons.css",
                "./ClientApp/boot.ts"
            ],
        },
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
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                    loader: "url-loader?limit=150000"
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin()
        ]
    };
};
