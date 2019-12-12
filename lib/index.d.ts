/**!
 * urlencode - lib/urlencode.js
 *
 * Copyright(c) 2012 - 2014
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */
/**
 * Module dependencies.
 */
import { decode } from './decode';
import { encode } from './encode';
import { parse } from './parse';
import { stringify } from './stringify';
declare function _encode(...argv: Parameters<typeof encode>): string;
declare namespace _encode {
    var decode: typeof import("./decode").decode;
    var parse: typeof import("./parse").parse;
    var stringify: typeof import("./stringify").stringify;
    var encode: typeof import("./encode").encode;
}
export { encode, decode, parse, stringify, };
export default _encode;
