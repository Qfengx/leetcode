function searchRange(nums: number[], target: number): number[] {
  /**
   * 判断边界值,-1 左移，0结束，1右移
   * @param index 判断的索引位置
   * @param isLeft 是否判断左边界值
   */
  function checkVal(index: number, isLeft: boolean = true) { // 判断边界值
    const cur = nums[index];
    if (isLeft) { // 左边界
      if (index === 0) {
        if (cur === target)
          return 0;
        else if (cur > target) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (cur === target) {
          if (nums[index - 1] < target) {
            return 0;
          } else { // 不然还是要左移
            return -1;
          }
        } else if (cur > target) {
          return -1;
        } else {
          return 1;
        }
      }
    } else { // 判断右边界值
      if (index === nums.length - 1) {
        if (cur === target)
          return 0;
        else if (cur > target) {
          return -1;
        } else {
          return 1;
        }
      } else {
        if (cur === target) {
          if (nums[index + 1] > target) {
            return 0;
          } else { // 不然还是要左移
            return 1;
          }
        } else if (cur > target) {
          return -1;
        } else {
          return 1;
        }
      }
    }
  }

  function findLeft() { // 查找左边界
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      const res = checkVal(mid);
      if (res === 0) return mid;
      else if (res < 0) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }

  function findRight() { // 查找右边界
    let left = 0, right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      const res = checkVal(mid, false);
      if (res === 0) return mid;
      else if (res < 0) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }

  return [findLeft(), findRight()];
};


console.info(searchRange([5,7,7,8,8,10], 8))
console.info(searchRange([5,7,7,8,8,10], 6))
console.info(searchRange([], 0))
console.info(searchRange([2,2], 2))