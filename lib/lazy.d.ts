import decodeURIComponent from './decode';
import encodeURIComponent from './encode';
export declare function createURIComponentFn(defaultCharset: string): {
    decodeURIComponent(str: string, charset?: string): string;
    encodeURIComponent(str: string, charset?: string): string;
};
export { decodeURIComponent, encodeURIComponent, };
declare const _default: {
    decodeURIComponent: typeof decodeURIComponent;
    encodeURIComponent: typeof encodeURIComponent;
};
export default _default;
