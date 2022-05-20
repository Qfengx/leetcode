// 即找最大值，且从中间开始找
function peakIndexInMountainArray(arr: number[]): number {

  const check = (arr: number[], mid: number): number => {
    let current = arr[mid];
    if (mid === 0 && arr[mid + 1] < current) return 0;
    if (mid === arr.length - 1 && arr[mid - 1] > current) return 0;
    if (arr[mid - 1] < current && current > arr[mid + 1]) return 0;
    if (arr[mid + 1] > current) return -1;
    return 1;
  }

  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let res = check(arr, mid);
    if (res === 0) {
      return mid;
    } else if (res < 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};