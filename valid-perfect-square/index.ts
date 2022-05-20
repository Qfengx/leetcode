function isPerfectSquare(num: number): boolean {
  let left = 1, right = num; // 1也算 1*1 = 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // let num = mid * mid; 如果这用乘 然后判断相等，可能会超安全数值范围
    let res = num / mid; // 等效替换为目标数除 mid
    if (res === mid) {
      return true;
    } else if (res < mid) { // mid大了
      right = mid - 1;
    } else {
      left = mid + 1;
    }

  }
  return false;
};

console.info(isPerfectSquare(4));
console.info(isPerfectSquare(1));
console.info(isPerfectSquare(16));
console.info(isPerfectSquare(5));
console.info(isPerfectSquare(2));
console.info(isPerfectSquare(0));