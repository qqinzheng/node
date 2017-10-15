const path = require('path');

console.log(path.win32.basename('/foo/bar/baz/asdf/quux.html')); // 返回一个path的最后一部分,这边是quux.html

console.log(path.basename('/foo/bar/baz/asdf/quux.html'),'.html');

console.log(process.env.PATH.split(path.delimiter)); // path.delimiter表示的是当前环境所对应的分隔符,在mac上是":"

console.log(path.dirname(__dirname + '/pathWin32.js')); // 得出某一个文件隶属于哪一个目录

console.log(path.extname(path.join(__dirname,'/pathWin32.js')));

path.format({ // 根据对象生成路径名
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});

path.isAbsolute('/foo/bar');

console.log(path.resolve('./build'));

console.log(path.sep); // /

console.log(path.parse(path.normalize('/foo/bar/baz//asdf/quux.html')));

console.log(path.posix.sep); // sep 在posix上的实现



