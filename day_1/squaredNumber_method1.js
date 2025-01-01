/* 
You are given an array of Integers in which each subsequent value is not less than the previous value. 
Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.
*/

// brute force approach
array = [-3, 1, 3, 7]
function sortedSquarredArray(array) {
    if (!array.length) return []
    const squaredArray = array.map(element => element * element)
    if (!array.find(element => element < 0)) return squaredArray
    else return squaredArray.sort((a, b) => a - b)
}

function squareNum(num) {
    return num * num
}

console.log(sortedSquarredArray(array))