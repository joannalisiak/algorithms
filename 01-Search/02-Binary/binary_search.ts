/**
 * repeat until (sub)array is size 0:
 *   calculate middle point of (sub)array
 *   if target is in middle -> stop
 *   otherwise if target is less than middle -> repeat changing end to be just left of middle
 *   otherwise if target is greater than middle -> repeat changing tsrt to be just right of middle
 */

const binarySearch = (list: number[], target: number): number | null => {
  let start: number = 0
  let end: number = list.length - 1

  while (start <= end) {
    let mid: number = Math.floor(start + end / 2)

    if (list[mid] === target) {
      return mid
    }

    if (list[mid] > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }

  return null
}

const list = [2, 4, 5, 6, 8]

const targetFound = 4
console.log(binarySearch(list, targetFound)) // 1

const targetNotFound = 9
console.log(binarySearch(list, targetNotFound)) // null
