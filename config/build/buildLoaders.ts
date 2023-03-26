import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildCssLoader} from './loaders/buildCssLoader';
import {buildBabelLoader} from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    const assetModules = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: isDev ? '[path][name].[ext]' : '[contenthash].[ext]'
        }
    };

    const babelLoader = buildBabelLoader(options);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    // если пишем на ts, его ts-loader позволяет обойтись без babel
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const cssLoader = buildCssLoader(isDev);

    return [
        assetModules,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ];
}
