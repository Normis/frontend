const base = require("./base");
const webpack = require("webpack");
const os = require("os");
const path = require("path");
const UglifyJsParallelPlugin = require("webpack-uglify-parallel");

const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mqpacker");

const config = Object.assign({}, base);

config.devtool = "source-map";

config.plugins.concat([
    new webpack.DefinePlugin({
        "process.env": {
            "NODE_ENV": JSON.stringify("production")
        }
    }),
    new webpack.optimize.DedupePlugin(),
    new UglifyJsParallelPlugin({
        workers: os.cpus().length,
        compress: {
            dead_code: true,
            drop_debugger: true,
            drop_console: true,
            warnings: false
        }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
]);

module.exports = config;