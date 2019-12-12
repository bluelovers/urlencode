/**
 * Created by user on 2019/12/12.
 */

import urlencode from '..';

let str = '苏千';
let charset = 'gbk';

console.dir(urlencode(str)); // default charset is utf8
console.dir(urlencode(str, 'gbk')); // => '%CB%D5%C7%A7'

import { decodeURIComponent, encodeURIComponent, createURIComponentFn } from '../lib/lazy';

console.dir(encodeURIComponent(str));
console.dir(encodeURIComponent(str, charset));

console.dir(decodeURIComponent(encodeURIComponent(str)));
console.dir(decodeURIComponent(encodeURIComponent(str, charset), charset));

let gbk = createURIComponentFn(charset);

console.dir(gbk.encodeURIComponent(str));
console.dir(gbk.encodeURIComponent(str, charset));

console.dir(gbk.decodeURIComponent(gbk.encodeURIComponent(str)));
console.dir(gbk.decodeURIComponent(gbk.encodeURIComponent(str, charset), charset));
