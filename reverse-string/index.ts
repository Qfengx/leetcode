/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let i = 0, mid = Math.floor(s.length / 2);
  mid * 2 === s.length && mid--;
  while (i <= mid) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
    i++;
  }
};
let s = ['a','b'];
reverseString(s);
console.info(s);