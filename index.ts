type LeftOpIsBigger = 1;
type RightOpIsBigger = -1;
type BothOpsAreEqual = 0;
type SemVerResult = LeftOpIsBigger | RightOpIsBigger | BothOpsAreEqual | any;

const convertToArray = (str: string) => {
    return str.split('.').map((val) => {
        if (val.length > 1 && Number(val.split('')[0]) === 0) {
            throw new TypeError('Wrong version format');
        }
        return Number(val);
    });
}

const SemVerCompare = (leftOp: string, rightOp: string): SemVerResult => {
    const versionFormat = /\d+.\d+.\d+(.\d+)?/;
    const leftOpArr = convertToArray(leftOp);
    const rightOpArr = convertToArray(rightOp);

    if (versionFormat.test(leftOp)
        && versionFormat.test(rightOp)
        && leftOpArr.every((el) => el || el >= 0)
        && rightOpArr.every((el) => el || el >= 0)
        && leftOpArr.length < 5
        && rightOpArr.length < 5
        && rightOpArr[3] !== 0
        && leftOpArr[3] !== 0
        && (rightOpArr[0] !== 0 || rightOpArr[1] !== 0)
        && (leftOpArr[0] !== 0 || leftOpArr[1] !== 0)) {
        let longest = leftOpArr;
        if (rightOpArr.length > leftOpArr.length) {
            longest = rightOpArr;
        }
        for (let i = 0; i < longest.length; i++) {
            if (rightOpArr[i] > leftOpArr[i] || leftOpArr[i] === undefined) {
                return -1;
            } else if (rightOpArr[i] < leftOpArr[i] || rightOpArr[i] === undefined) {
                return 1;
            }
        }
    } else {
        throw new TypeError('Wrong version format');
    }
    return 0;
}

module.exports = SemVerCompare;
