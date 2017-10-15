console.log(module.paths);

var colors = require('colors');

console.log('This Node kicks it'.rainbow.underline);

console.log('This Node kicks it'.zebra.bold);

colors.setTheme({
    mod1_warn: 'red'
})

console.log('This Node kicks it'.mod1_warn);