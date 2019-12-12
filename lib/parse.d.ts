import { IParseOptions } from './types';
/**
 * Parse the given query `str` or `obj`, returning an object.
 *
 * @param {String} str | {Object} obj
 * @return {Object}
 * @api public
 */
export declare function parse(str: string | Record<any, any>, options?: IParseOptions): Record<any, any>;
export default parse;
