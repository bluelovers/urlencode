import { IStringifyOptions } from './types';
export declare type IEncodeComponentInput = string | number | boolean;
export declare type IStringifyInputArray = any[];
export declare type IStringifyInputObject = Record<any, any>;
export declare type IStringifyInput = IStringifyInputArray | string | IStringifyInputObject | unknown;
export declare function encodeComponent(item: IEncodeComponentInput, charset: string): string;
export declare function stringify(obj: IStringifyInput, prefix?: string | IStringifyOptions, options?: IStringifyOptions): string;
export default stringify;
