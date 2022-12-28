
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