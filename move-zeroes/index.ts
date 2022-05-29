/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // 定义j 表示实际的排序指针位置，只有非0数值才移动
  let i = 0,j = 0;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
    i++;
  }
  // 剩余的位置补0
  while (j < nums.length) {
    nums[j++] = 0;
  }
};