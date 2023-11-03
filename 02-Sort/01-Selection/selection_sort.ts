const selectionSort = (list: number[]): number[] => {
  for (let i = 0; i < list.length - 1; i++) {
    let smallestIndex = i

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[smallestIndex]) {
        smallestIndex = j
      }
    }

    if (smallestIndex !== i) {
      const temp = list[i]
      list[i] = list[smallestIndex]
      list[smallestIndex] = temp
    }
  }

  return list
}

const list = [4, 6, 3, 8, 1]
console.log(selectionSort(list)) // [1, 3, 4, 6, 8]

// alternative
const selectionSortNewList = (list: number[]): number[] => {
  const sorted: number[] = []

  while (list.length > 0) {
    const smallestIndex = findSmallestIndex(list)
    sorted.push(list.splice(smallestIndex, 1)[0])
  }

  return sorted
}

const findSmallestIndex = (list: number[]): number => {
  let smallestElement = list[0]
  let smallestIndex = 0

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] < smallestElement) {
      smallestElement = list[i]
      smallestIndex = i
    }
  }

  return smallestIndex
}
