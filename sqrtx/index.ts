function mySqrt(x: number): number {
  let left = 1, right = x;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    let res = x / mid;
    if (mid === res) return mid;
    else if (res > mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 没有找到说明只能取一个近似值
  if (left > right) return left - 1;
  else return right + 1;
};

// 算数平方根，二分查找近似值
console.info(mySqrt(4));
console.info(mySqrt(8));
console.info(mySqrt(1));