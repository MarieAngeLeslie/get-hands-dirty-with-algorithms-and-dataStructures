"use strict";
function isSortedArray(array, length) {
    if (length == 1)
        return true;
    return (array[length - 1] < array[length - 2]) ? false : isSortedArray(array, length - 1);
}
let array = [38, 46, 56, 65, 75];
let array_length = array.length;
console.log(isSortedArray(array, array_length));
