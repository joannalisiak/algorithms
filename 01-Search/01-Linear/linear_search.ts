const linearSearch = (list: number[], target: number): number | null => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i
    }
  }
  return null
}

const list = [2, 5, 6, 8, 4]

const targetFound = 8
console.log(linearSearch(list, targetFound)) // 3

const targetNotFound = 9
console.log(linearSearch(list, targetNotFound)) // null
