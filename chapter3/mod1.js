var globalValue;

exports.setGlobal = function(value) {
    globalValue = value;
}

exports.returnGlobal = function() {
    console.log(global);
    return globalValue;
}