type LeftOpIsBigger = 1;
type RightOpIsBigger = -1;
type BothOpsAreEqual = 0;
type SemVerResult = LeftOpIsBigger | RightOpIsBigger | BothOpsAreEqual | any;

const convertToArray = (str: string) => {
    return str.split('.').map((val) => Number(val));
}

const SemVerCompare = (leftOp: string, rightOp: string): SemVerResult => {
    const leftOpArr = convertToArray(leftOp);
    const rightOpArr = convertToArray(rightOp);
    
    if (!leftOpArr[0] || !rightOpArr[0]) {
        throw new TypeError();
    }

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
    return 0;
};

module.exports = SemVerCompare;
