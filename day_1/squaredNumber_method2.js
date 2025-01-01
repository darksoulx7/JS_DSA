/* 
You are given an array of Integers in which each subsequent value is not less than the previous value. 
Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.
*/

// 2 pointers approach
function sortedSquarredArray(array) {
    if (!array.length) return [];
    const answer = new Array(array.length).fill(0);
    let left_pos = 0;
    let right_pos = array.length - 1;
    let answer_pos = array.length - 1;

    while (left_pos <= right_pos) {
        const leftValue = Math.pow(array[left_pos], 2)
        const rightValue = Math.pow(array[right_pos], 2)
        if (leftValue > rightValue) {
            answer[answer_pos] = leftValue
            left_pos++;
        } else {
            answer[answer_pos] = rightValue
            right_pos--;
        }
        answer_pos--;
    }
    return answer;
}

const array = [-3, 1, 2, 2, 3, 3, 3, 6, 7];
console.log(sortedSquarredArray(array));
