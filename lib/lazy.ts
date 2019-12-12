
import decodeURIComponent from './decode';
import encodeURIComponent from './encode';

export function createURIComponentFn(defaultCharset: string)
{
	return {
		decodeURIComponent(...argv: Parameters<typeof decodeURIComponent>)
		{
			let [input, charset = defaultCharset] = argv;
			return decodeURIComponent(input, charset)
		},
		encodeURIComponent(...argv: Parameters<typeof encodeURIComponent>)
		{
			let [input, charset = defaultCharset] = argv;
			return encodeURIComponent(input, charset)
		},
	}
}

export {
	decodeURIComponent,
	encodeURIComponent,
}

export default {
	decodeURIComponent,
	encodeURIComponent,
}
