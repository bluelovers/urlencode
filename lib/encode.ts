/**
 * Created by user on 2019/12/12.
 */

import { _isUTF8, encodeBuffer } from './util';
import iconv from 'iconv-lite';

export function encode(str: string, charset?: string)
{
	if (_isUTF8(charset))
	{
		return encodeURIComponent(str);
	}

	let buf = iconv.encode(str, charset);
	return encodeBuffer(buf);
}

export default encode
