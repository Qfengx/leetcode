function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  let res = 0;
  for (const a of arr1) {
    let num = 0;
    for (const b of arr2) {
      if (Math.abs(a - b) <= d) {
        num++;
      }
    }
    if (num === 0) res++;
  }
  return res;
};