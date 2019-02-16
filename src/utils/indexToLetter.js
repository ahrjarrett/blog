const start = 97
// const alphabetMap = [...Array(26)]
//   .reduce((a, _, i) => {
//     console.log("reducing! a:")
//     console.log("reducing! _:")
//     console.log("reducing! i:")
//     return a.concat(String.fromCharCode(start + i))
//   }, "")
//   .split("")
//   .map(a => console.log("thing: ", a))
//   .reduce((acc, curr, i) => ({ ...acc, [i]: curr }), {})
const alphabetMap = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
  11: "l",
  12: "m",
  13: "n",
  14: "o",
  15: "p",
  16: "q",
  17: "r",
  18: "s",
  19: "t",
  20: "u",
  21: "v",
  22: "w",
  23: "x",
  24: "y",
  25: "z"
}

export const indexToLetter = index => alphabetMap[index].toUpperCase()

console.log("start:", start)
console.log("alphabetMap:", alphabetMap)
console.log("indexToLetter.js:", indexToLetter(3))
console.log("indexToLetter.js:", indexToLetter(0))
