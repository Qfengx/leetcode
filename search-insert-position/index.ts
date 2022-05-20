function searchInsert(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  while(left <= right ) {
    let mid = Math.floor((left + right) / 2);
    let current = nums[mid];
    if (current === target) return mid;
    else if (current > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (left > nums.length - 1) return right;
  else return left;
};
console.info(searchInsert([1,3,5,6], -1));