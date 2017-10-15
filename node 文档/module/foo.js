const circle = require('./circle.js');

const path = require('path');

// console.log(require.cache);

// console.log(module.paths);

console.log(module.filename);

console.log(module.id);

console.log(module.parent);

console.log(require.main === module);

console.log(__dirname);

console.log(__filename);

// 返回这个moduleid,也就是这个模块module.exports出来的东西
var circleModule = module.require('/Users/lianshang/秦铮的工作目录/node/node学习指南相关代码/node 文档/module/circle.js');

console.log(circleModule(4));

console.log(`半径为4的圆的面积是${circle(4)}`);