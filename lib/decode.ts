/**
 * Created by user on 2019/12/12.
 */

import { _isUTF8, decodeToArray } from './util';
import { Buffer } from "buffer";
import iconv from 'iconv-lite';

export function decode(str: string, charset?: string)
{
	if (_isUTF8(charset))
	{
		return decodeURIComponent(str);
	}
	let buf = Buffer.from(decodeToArray(str));
	return iconv.decode(buf, charset);
}

export default decode
