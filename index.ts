type LeftOpIsBigger = 1;
type RightOpIsBigger = -1;
type BothOpsAreEqual = 0;
type SemVerResult = LeftOpIsBigger | RightOpIsBigger | BothOpsAreEqual;

// const SemVerCompare = (leftOp: string, rightOp: string): SemVerResult => {
//     // fill fn body with your code
// };