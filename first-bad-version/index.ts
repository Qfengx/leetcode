/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

  const checkIsFirst = (current: number) => {
    if (isBadVersion(current)) {
      if (!isBadVersion(current - 1)) return 0;
      return 1;
    }
    return -1;
  }

  return function (n: number): number {
    let left = 0, right = n;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let res = checkIsFirst(mid);
      if (res === 0) return mid;
      else if (res > 0) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  };
};