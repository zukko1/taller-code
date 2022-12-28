
// Problem 1

const coins = [1, 5, 1, 1, 1, 10, 15, 20, 100]

// nlog(n) time, o(1) space
function changeFunc(coins) {
  coins.sort((a,b) => a-b)
  let change = 0
  for(let coin of coins){
    if(change + 1 < coin) break
    change += coin
  }
  return change + 1 
}

console.log(changeFunc(coins))


// Problem 2


const test =  [1, 4, 9, 25, 36, 64, 81]

//  T O(n), S O(n)
function sortedSquaredArray(array){
  const newArray = []
  const lastIndex =  array.length -1

  for(let start = 0, end = lastIndex, index = lastIndex; index >= 0; index--){
    if(Math.abs(array[start]) > Math.abs(array[end])){
      newArray[index] = array[start] * array[start]
      start++;
    } else {
      newArray[index] = array[end] * array[end]
      end--;
    }
  }

  return newArray
}


console.log(sortedSquaredArray(test))