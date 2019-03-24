// const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const compileScss = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'styles/[name].css',
});

const browserConfig = {
    entry: path.join(__dirname, '/src/scripts/browser/index.js'),
    output: {
        path: path.join(__dirname, '/dist/browser'),
        filename: 'scripts/bundle.js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-syntax-dynamic-import',
                        '@babel/plugin-transform-modules-commonjs',
                    ]
                }
            }]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'media/images/',
                    name: '[name].[ext]',
                },
            }]
        },
        {
            test: /\.(woff|woff2|ttf|eot|otf)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    outputPath: 'media/fonts/',
                    name: '[name].[ext]'
                },
            }],
        }]
    },
    plugins: [
        compileScss,
        // new webpack.DefinePlugin({
        //     'process.env.API_ENDPOINT': process.env.API_ENDPOINT ? `'${ process.env.API_ENDPOINT }'` : '"http://localhost:3003"'
        // }),
        new CopyWebpackPlugin([
            {
                from: 'src/media',
                to: 'media'
            }
        ]),
    ],
};

const serverConfig = {
    entry: './src/scripts/server/index.js',
    target: 'node',
    externals: [
        nodeExternals()
    ],
    output: {
        path: path.join(__dirname, '/dist/server'),
        filename: 'scripts/bundle.js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-syntax-dynamic-import',
                        '@babel/plugin-transform-modules-commonjs',
                    ]
                }
            }]
        }, {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'media/images/',
                    name: '[name].[ext]',
                },
            }]
        }]
    },
    plugins: []
};

module.exports = [browserConfig, serverConfig];
