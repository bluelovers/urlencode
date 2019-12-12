/**!
 * urlencode - lib/urlencode.js
 *
 * Copyright(c) 2012 - 2014
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

import { decode } from './decode';
import { encode as _encode } from './encode';
import { parse } from './parse';
import { stringify } from './stringify';

export function encode(...argv: Parameters<typeof _encode>)
{
	return _encode(...argv)
}

encode.decode = decode;
encode.parse = parse;
encode.stringify = stringify;

encode.encode = encode;

export {
	decode,
	parse,
	stringify,
}

export default encode
