const mergeSort = (list: number[]): number[] => {
  // base case
  if (list.length <= 1) {
    return list
  }

  // recursive case
  const middle = Math.floor(list.length / 2)
  const left = list.slice(0, middle)
  const right = list.slice(middle, list.length)

  return mergeRecursively(mergeSort(left), mergeSort(right))
}

const mergeRecursively = (left: number[], right: number[]): number[] => {
  // first base case
  if (left.length == 0) {
    return right
  }

  // second base case
  if (right.length == 0) {
    return left
  }

  // recursive case
  if (left[0] < right[0]) {
    return [left[0], ...mergeRecursively(left.slice(1), right)]
  } else {
    return [right[0], ...mergeRecursively(right.slice(1), left)]
  }
}

// alternative
const merge = (left: number[], right: number[]): number[] => {
  const result: number[] = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex))
}

const list = [4, 6, 3, 8, 1]
console.log(mergeSort(list)) // [1, 3, 4, 6, 8]
