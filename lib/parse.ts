"use strict";

import { decode } from './decode';
import { IParseOptions } from './types';

/**
 * Cache non-integer test regexp.
 */

const isint = /^[0-9]+$/;

interface IParseNode extends Record<any, any>
{
	base?: IParseNode
}

function promote(parent: IParseNode, key: string)
{
	if (parent[key].length === 0)
	{
		return parent[key] = {};
	}
	let t: IParseNode = {};
	for (let i in parent[key])
	{
		if (parent[key].hasOwnProperty(i))
		{
			t[i] = parent[key][i];
		}
	}
	parent[key] = t;
	return t;
}

function _parse(parts: string[], parent: IParseNode, key: string, val: string)
{
	let part = parts.shift();

	// illegal
	if (Object.hasOwnProperty.call(Object.prototype, key))
	{
		return;
	}

	// end
	if (!part)
	{
		if (Array.isArray(parent[key]))
		{
			parent[key].push(val);
		}
		else if ('object' === typeof parent[key])
		{
			parent[key] = val;
		}
		else if ('undefined' === typeof parent[key])
		{
			parent[key] = val;
		}
		else
		{
			parent[key] = [parent[key], val];
		}
		// array
	}
	else
	{
		let obj = parent[key] = parent[key] || [];
		if (']' === part)
		{
			if (Array.isArray(obj))
			{
				if ('' !== val)
				{
					obj.push(val);
				}
			}
			else if ('object' === typeof obj)
			{
				obj[Object.keys(obj).length] = val;
			}
			else
			{
				obj = parent[key] = [parent[key], val];
			}
			// prop
		}
		else if (~part.indexOf(']'))
		{
			part = part.substr(0, part.length - 1);
			if (!isint.test(part) && Array.isArray(obj))
			{
				obj = promote(parent, key);
			}
			_parse(parts, obj, part, val);
			// key
		}
		else
		{
			if (!isint.test(part) && Array.isArray(obj))
			{
				obj = promote(parent, key);
			}
			_parse(parts, obj, part, val);
		}
	}
}

/**
 * Merge parent key/val pair.
 */

function merge(parent: IParseNode, key: string, val: string)
{
	if (~key.indexOf(']'))
	{
		let parts = key.split('[');
		let len = parts.length;
		let last = len - 1;
		_parse(parts, parent, 'base', val);
		// optimize
	}
	else
	{
		if (!isint.test(key) && Array.isArray(parent.base))
		{
			let t = {} as Record<any, any>;
			for (let k in parent.base)
			{
				t[k] = parent.base[k];
			}
			parent.base = t;
		}
		set(parent.base, key, val);
	}

	return parent;
}

/**
 * Compact sparse arrays.
 */

function compact(obj: any[] | Record<any, any>)
{
	if ('object' !== typeof obj)
	{return obj;}

	if (Array.isArray(obj))
	{
		let ret = [];

		for (let i in obj)
		{
			if (Object.hasOwnProperty.call(obj, i))
			{
				ret.push(obj[i]);
			}
		}

		return ret;
	}

	for (let key in obj)
	{
		obj[key] = compact(obj[key]);
	}

	return obj;
}

/**
 * Parse the given obj.
 */

function parseObject(obj: Record<any, any>)
{
	let ret = { base: {} };

	Object.keys(obj).forEach(function (name)
	{
		merge(ret, name, obj[name]);
	});

	return compact(ret.base);
}

/**
 * Parse the given str.
 */

function parseString(str: unknown | string, options: IParseOptions)
{
	let ret = String(str).split('&').reduce(function (ret, pair)
	{
		let eql = pair.indexOf('=');
		let brace = lastBraceInKey(pair);
		let key = pair.substr(0, brace || eql);
		let val = pair.substr(brace || eql, pair.length);
		val = val.substr(val.indexOf('=') + 1, val.length);

		// ?foo
		if ('' === key)
		{
			key = pair;
			val = '';
		}
		if ('' === key)
		{
			return ret;
		}

		let charset = options.charset;
		return merge(ret, decode(key), decode(val, charset));
	}, {
		base: {}
	} as IParseNode).base;

	return compact(ret);
}

/**
 * Set `obj`'s `key` to `val` respecting
 * the weird and wonderful syntax of a qs,
 * where "foo=bar&foo=baz" becomes an array.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {String} val
 * @api private
 */

function set(obj: Record<any, any>, key: string, val: string)
{
	let v = obj[key];
	if (Object.hasOwnProperty.call(Object.prototype, key))
	{return;}
	if (undefined === v)
	{
		obj[key] = val;
	}
	else if (Array.isArray(v))
	{
		v.push(val);
	}
	else
	{
		obj[key] = [v, val];
	}
}

/**
 * Locate last brace in `str` within the key.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function lastBraceInKey(str: string)
{
	let len = str.length;
	let brace: boolean;
	let c;
	for (let i = 0; i < len; ++i)
	{
		c = str[i];
		if (']' === c)
		{
			brace = false;
		}
		if ('[' === c)
		{
			brace = true;
		}
		if ('=' === c && !brace)
		{
			return i;
		}
	}
}

/**
 * Parse the given query `str` or `obj`, returning an object.
 *
 * @param {String} str | {Object} obj
 * @return {Object}
 * @api public
 */

export function parse(str: string | Record<any, any>, options?: IParseOptions)
{
	if (null === str || '' === str)
	{
		return {};
	}
	if (!options)
	{
		options = {};
	}
	return 'object' === typeof str
		? parseObject(str)
		: parseString(str, options);
}

export default parse
