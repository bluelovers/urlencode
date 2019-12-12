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
import { encode } from './encode';
import { parse } from './parse';
import { stringify } from './stringify';

function _encode(...argv: Parameters<typeof encode>)
{
	return encode(...argv)
}

_encode.decode = decode;
_encode.parse = parse;
_encode.stringify = stringify;

_encode.encode = encode;

export {
	encode,
	decode,
	parse,
	stringify,
}

export default _encode
