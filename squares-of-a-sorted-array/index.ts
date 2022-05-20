function sortedSquares(nums: number[]): number[] {
  let n = nums.length;
  let ans = [];
  for (let i = 0, j = n - 1, pos = n - 1; i <= j;) {
      if (nums[i] * nums[i] > nums[j] * nums[j]) {
          ans[pos] = nums[i] * nums[i];
          ++i;
      } else {
          ans[pos] = nums[j] * nums[j];
          --j;
      }
      --pos;
  }
  return ans;
};
// 最大值肯定是两端产生，所以从两端 分别比较往中间靠拢