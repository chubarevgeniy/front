'use strict';

const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'build');

module.exports = {
    context: SRC_PATH,
    entry: {
        index: './index.js',
        messagepage: './scripts/messagepage.js',
        dialogpage: './scripts/dialogpage.js'
    },
    output: {
        path: BUILD_PATH,
        filename: '[name]bundle.js'
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    },
                ],
            },
            {
                test: /shadow\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'css-loader'
                    },
                ],
            },
            {
                test: /\.css$/,
                include: SRC_PATH,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif|svg)$/i,
                include: SRC_PATH,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img',
                        }
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'styles/[name].css',
            chunks: ['index','messagepage','dialogpage'],
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            chunks: ['index'],
        }),
        new HTMLWebpackPlugin({
            filename: 'messagepage.html',
            template: './tempaletes/messagepage.html',
            chunks: ['messagepage'],
        }),
        new HTMLWebpackPlugin({
            filename: 'dialogpage.html',
            template: './tempaletes/dialogpage.html',
            chunks: ['dialogpage'],
        })
    ]
};
