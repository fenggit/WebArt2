let buffer = new Buffer("abc\r\ndfddf\r\nsdfdff");

// = substring
// 截取，[0，3）
//console.log(buffer.slice(0, 3).toString());


/**
 * buffer切割
 * @param buffer
 * @param delimiter
 * @returns {Array}
 */
function bufferSplit(buffer, delimiter) {
    if (buffer == null) {
        return [];
    }

    let arr = [];
    let n = 0;

    // 寻找delimiter的位置
    while ((n = buffer.indexOf(delimiter)) != -1) {
        // 截取符合的buffer
        arr.push(buffer.slice(0, n));
        // buffer 从新的位置开始
        buffer = buffer.slice(n + delimiter.length);
    }
    // 最后1个符合条件的
    arr.push(buffer);

    return arr;
}


//console.log(bufferSplit(buffer, "\r\n"));

//console.log(bufferSplit(buffer, "\r\n").map(b => b.toString()));

// 可以给其他模块使用
exports.bufferSplit = function (buffer, delimiter) {
    /*if (buffer == null) {
        return [];
    }*/

    let arr = [];
    let n = 0;

    // 寻找delimiter的位置
    while ((n = buffer.indexOf(delimiter)) != -1) {
        // 截取符合的buffer
        arr.push(buffer.slice(0, n));
        // buffer 从新的位置开始
        buffer = buffer.slice(n + delimiter.length);
    }
    // 最后1个符合条件的
    arr.push(buffer);

    return arr;
};