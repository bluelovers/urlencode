"use strict";

import { encode } from './encode';
import { IStringifyOptions } from './types';
import { isASCII } from './util';

export type IEncodeComponentInput = string | number | boolean;

export type IStringifyInputArray = any[];
export type IStringifyInputObject = Record<any, any>;

export type IStringifyInput = IStringifyInputArray | string | IStringifyInputObject | unknown;

export function encodeComponent(item: IEncodeComponentInput, charset: string)
{
	item = String(item);
	if (isASCII(item))
	{
		item = encodeURIComponent(item);
	}
	else
	{
		item = encode(item, charset);
	}
	return item;
}

export function stringify(obj: IStringifyInput, prefix?: string | IStringifyOptions, options?: IStringifyOptions): string
{
	if (typeof prefix !== 'string')
	{
		options = prefix || {};
		prefix = null;
	}

	let charset = options.charset || 'utf-8';
	if (Array.isArray(obj))
	{
		return stringifyArray(obj, prefix as any, options);
	}
	else if ('string' === typeof obj)
	{
		return stringifyString(obj, prefix as any, options);
	}
	else if ('[object Object]' === {}.toString.call(obj))
	{
		return stringifyObject(obj, prefix as any, options);
	}

	return prefix + '=' + encodeComponent(String(obj), charset);
}

function stringifyString(str: string, prefix: string, options: IStringifyOptions)
{
	if (!prefix)
	{
		throw new TypeError('stringify expects an object');
	}
	let charset = options.charset;
	return prefix + '=' + encodeComponent(str, charset);
}

function stringifyArray(arr: IStringifyInputArray, prefix: string, options: IStringifyOptions)
{
	let ret = [];
	if (!prefix)
	{
		throw new TypeError('stringify expects an object');
	}
	for (let i = 0; i < arr.length; i++)
	{
		ret.push(stringify(arr[i], prefix + '[' + i + ']', options));
	}
	return ret.join('&');
}

function stringifyObject(obj: IStringifyInputObject, prefix: string, options: IStringifyOptions)
{
	let ret: string[] = [];
	let keys = Object.keys(obj);
	let key;

	let charset = options.charset;
	for (let i = 0, len = keys.length; i < len; ++i)
	{
		key = keys[i];
		if ('' === key)
		{
			continue;
		}
		if (null === obj[key])
		{
			ret.push(encode(key, charset) + '=');
		}
		else
		{
			ret.push(stringify(
				obj[key],
				prefix ? prefix + '[' + encodeComponent(key, charset) + ']' : encodeComponent(key, charset),
				options,
			));
		}
	}

	return ret.join('&');
}

export default stringify;
