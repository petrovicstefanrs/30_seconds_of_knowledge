### map

`Array.prototype.map()` returns the array populated with the results of calling a provided function on every element in that array. 


Use `Array.prototype.map()` to increase the entry by a desired number.

```js
const prices = [100, 150, 200, 250, 300, 350]

const newPrices = prices.forEach((value)=>{
  return value + 50
})

console.log(newPrices) //[150, 200, 250, 300, 350, 400]

```