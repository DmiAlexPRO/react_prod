import {ResolveOptions} from 'webpack';
import {BuildOptions} from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        // для этих файлов не будем указывать расширения при импортах
        extensions: ['.tsx', '.ts', '.js'],
        // предпочитать абсолютные пути
        preferAbsolute: true,
        // пути к модулям
        modules: [options.paths.src, 'node_modules'],
        // говорим, в дирректории это будет файл по умолчанию
        mainFiles: ['index'],
        alias: [],

    };
}
