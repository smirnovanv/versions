var convertToArray = function (str) {
    return str.split('.').map(function (val) { return Number(val); });
};
var SemVerCompare = function (leftOp, rightOp) {
    var leftOpArr = convertToArray(leftOp);
    var rightOpArr = convertToArray(rightOp);
    if (!leftOpArr[0] || !rightOpArr[0]) {
        throw new TypeError();
    }
    var longest = leftOpArr;
    if (rightOpArr.length > leftOpArr.length) {
        longest = rightOpArr;
    }
    for (var i = 0; i < longest.length; i++) {
        if (rightOpArr[i] > leftOpArr[i] || leftOpArr[i] === undefined) {
            return -1;
        }
        else if (rightOpArr[i] < leftOpArr[i] || rightOpArr[i] === undefined) {
            return 1;
        }
    }
    return 0;
};
module.exports = SemVerCompare;
