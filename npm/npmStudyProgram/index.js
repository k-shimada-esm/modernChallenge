const moment = require('moment');
console.log(moment());
console.log(moment().format('YYYY年MM月DD日 HH時mm分ss秒'));

// 日本のロケールを有効にする
moment.locale('ja');

console.log(moment());
console.log(moment().format('YYYY年MM月DD日 HH時mm分ss秒'));
