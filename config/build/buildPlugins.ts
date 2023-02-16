import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack, {ProgressPlugin, WebpackPluginInstance} from 'webpack';
import {BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';


export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            _IS_DEV: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ];
}
