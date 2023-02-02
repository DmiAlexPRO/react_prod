import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'] // для этих файлов не будем указывать расширения при импортах
    };
}