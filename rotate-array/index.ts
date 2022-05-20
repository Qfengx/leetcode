/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // 原地解决的，首先对整体长度求余，等于长度就相当于是回到了原点
  let realMove = k % nums.length; 
  const moveOnce = (nums: number[]) => {
    let len = nums.length;
    let i = 0;
    while (len--) {
      let temp = nums[i];
      nums[i] = nums[nums.length - 1];
      nums[nums.length - 1] = temp;
      i++;
    }
  }
  while(realMove--) moveOnce(nums);
};