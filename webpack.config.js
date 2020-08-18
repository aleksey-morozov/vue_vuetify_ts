const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
    new VueLoaderPlugin(),
];

if (isProduction) {
    plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
    entry: {
        main: './src/main.ts',
    },
    output: {
        filename: '[name].js',
        publicPath: 'public/js/',
        path: path.resolve(__dirname, 'public/js/'),
        chunkFilename: 'chunks/[name].js'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            vue: 'vue/dist/vue.esm.js'
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.less$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                                indentedSyntax: true
                            },
                        },
                    },
                ],
            }
        ],
    },
    stats: {
        warningsFilter: [/Failed to parse source map/],
    },
    plugins,
};
