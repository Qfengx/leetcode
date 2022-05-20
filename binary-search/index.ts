function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    let current = nums[mid];
    if (target === current) {
      return mid;
    } else if (current > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};


console.info(search([-1,0,3,5,9,12], 2));