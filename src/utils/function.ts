// 随机数
export function produceNum(min: number, max: number, nums: number) {
  let arr = []
  for (let i = 0; i < nums; i++) {
    let num = Math.floor(Math.random() * (max - min) + min)
    arr.indexOf(num) == -1 ? arr.push(num) : i-- // 不存在push入，存在则使i-1增加一次循环次数
  }
  return arr
}
