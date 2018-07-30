const path = require("path");

module.exports = {
    entry: {
        vendor: [
            "vue",
            "vue-router"
        ]
    },
    output: {
        path: path.join(__dirname, "./wwwroot/dist"),
        filename: "[name].js",
        publicPath: "dist/",
        library: "[name]_[hash]"
    },
    module: {
        rules: [
            {
                test: /\.css(\?|$)/,
                loader: "css-loader"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/,
                loader: "url-loader?limit=100000"
            }
        ]
    }
};
