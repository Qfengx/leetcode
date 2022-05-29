function nextGreatestLetter(letters: string[], target: string): string {
  const check = (index) => { // 判断是否是目标值
    if (letters[index] > target) { // 符合一要求
      if (index === 0 || letters[index - 1] <= target) return 0;
      else { // 说明还可以往左找
        return -1;
      }
    } else {
      return 1;
    }
  }  

  let left = 0, right = letters.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let res = check(mid);
    if (res === 0) return letters[mid];
    else if (res > 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 不存在 需要返回第一个！！！（题目里没说）
  return letters[0];
};