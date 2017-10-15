const readline = require('readline');

// const rl2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('你认为node.js中文网怎么样',(answer) => {
//     console.log(`多谢你的反馈${answer}`);
//     rl.close();
// });


// rl.on('close',(arg1,arg2)=> {
//     console.log('当前输入输出流已经结束')
// });

// rl2.on('line',(line) => {
//     console.log(`接收到${line}`);
// });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '请输入> '
});

rl.prompt();

rl.on('line',(line) => {
    switch(line.trim()) {
        case 'hello':
            console.log('world');
            break;
        default:
            console.log(`你输入的是:'${line.trim()}'`);
            break;
    }
    rl.prompt();
}).on('close',()=>{
    console.log('再见');
    process.exit(0);
});

setTimeout(function(){
    rl.clearLine(process.stdin,0);
},4000);


