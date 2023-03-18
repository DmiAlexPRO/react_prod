import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack, {ProgressPlugin, WebpackPluginInstance} from 'webpack';
import {BuildOptions} from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';


export function buildPlugins({paths, isDev, apiUrl, project}: BuildOptions): WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            _IS_DEV: JSON.stringify(isDev),
            _API: JSON.stringify(apiUrl),
            _PROJECT: JSON.stringify(project)
        })
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }));
    }

    return plugins;
}
