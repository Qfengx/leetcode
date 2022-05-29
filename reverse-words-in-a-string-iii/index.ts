function reverseWords(s: string): string {

  const swap = (a, b) => {
    let a1 = s.substring(0, a - 1);
    let a2 = s.substring(a + 1, b);
    let a3 = s.substring(b + 1);
    s = a1 + s.charAt(b) + a2 + s.charAt(a) + a3;
  }

  let len = s.length, i = 0;
  while (i < len) {
    let start = i;
    while (i < len && s[i] != ' ') {
      i++;
    }
    let left = start, right = i - 1;
    while (left < right) {
      swap(left, right);
      left++;
      right--;
    }
    while (i < len && s[i] == ' ') {
      i++;
    }
  }
  return s;
  
};


let str = '123456';
const swap = (a: number, b: number) => {
  let a1 = str.substring(0, a - 1);
  let a2 = str.substring(a + 1, b);
  let a3 = str.substring(b + 1);
  str = a1 + str.charAt(b) + a2 + str.charAt(a) + a3;
}
swap(2,5);
console.info(str);