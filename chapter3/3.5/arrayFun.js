function cancatArray(str,array) {
    return array.map(function(item) {
        return str + '' + item;
    });
}

exports.cancatArray = cancatArray;