var convertToArray = function (str) {
    return str.split('.').map(function (val) {
        if (val.length > 1 && Number(val.split('')[0]) === 0) {
            throw new TypeError('Wrong version format');
        }
        return Number(val);
    });
};
var SemVerCompare = function (leftOp, rightOp) {
    var versionFormat = /\d+.\d+.\d+(.\d+)?/;
    var leftOpArr = convertToArray(leftOp);
    var rightOpArr = convertToArray(rightOp);
    if (versionFormat.test(leftOp)
        && versionFormat.test(rightOp)
        && leftOpArr.every(function (el) { return el || el >= 0; })
        && rightOpArr.every(function (el) { return el || el >= 0; })
        && leftOpArr.length < 5
        && rightOpArr.length < 5
        && rightOpArr[3] !== 0
        && leftOpArr[3] !== 0
        && (rightOpArr[0] !== 0 || rightOpArr[1] !== 0)
        && (leftOpArr[0] !== 0 || leftOpArr[1] !== 0)) {
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
    }
    else {
        throw new TypeError('Wrong version format');
    }
    return 0;
};
module.exports = SemVerCompare;
