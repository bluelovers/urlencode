/**
 * Created by user on 2019/12/12.
 */

import urlencode from '..';

console.dir(urlencode('苏千')); // default charset is utf8
console.dir(urlencode('苏千', 'gbk')); // => '%CB%D5%C7%A7'

