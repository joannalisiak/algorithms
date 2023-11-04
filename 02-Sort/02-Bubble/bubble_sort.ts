const bubbleSort = (list: number[]): number[] => {
  let swapCounter = -1 // arbitrary value

  while (swapCounter != 0) {
    swapCounter = 0

    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        const tempBigger = list[i]
        const tempSmaller = list[i + 1]
        list[i] = tempSmaller
        list[i + 1] = tempBigger
        swapCounter++
      }
    }
  }

  return list
}

const list = [4, 6, 3, 8, 1]
console.log(bubbleSort(list)) // [1, 3, 4, 6, 8]
