
export function _isUTF8(charset: string)
{
	if (!charset)
	{
		return true;
	}
	charset = charset.toLowerCase();
	return charset === 'utf8' || charset === 'utf-8';
}

export function encodeBuffer(buf: Buffer | number[])
{
	let encodeStr = '';
	for (let i = 0; i < buf.length; i++)
	{
		// @ts-ignore
		encodeStr += '%' + buf[i].toString('16');
	}
	encodeStr = encodeStr.toUpperCase();
	return encodeStr;
}

export function decodeToArray(str: string)
{
	let bytes: number[] = [];
	for (let i = 0; i < str.length;)
	{
		if (str[i] === '%')
		{
			i++;
			bytes.push(parseInt(str.substring(i, i + 2), 16));
			i += 2;
		}
		else
		{
			bytes.push(str.charCodeAt(i));
			i++;
		}
	}
	return bytes
}

export function isASCII(str: string)
{
	return (/^[\x00-\x7F]*$/).test(str);
}
