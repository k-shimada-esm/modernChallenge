const moment = require('moment');

console.log('現在時刻を出力する');
console.log(moment());

console.log('標準形式で出力する');
console.log(moment().format('llll'));

console.log('日本ロケールで出力する');
moment.locale('ja');    // 日本のロケールを有効にする
console.log(moment().format('llll'));
