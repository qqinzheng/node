const {PI} = Math;

// exports.area = (r) => PI * r * r;

// exports = (r) => PI * r * r;
console.log(require.main === module);

console.log(module.parent);

exports.a = 123;
exports.b = 456;

exports.area = function() {
    console.log(123);
}