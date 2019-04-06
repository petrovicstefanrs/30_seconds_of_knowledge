### maxBy

> ```Ord b => (a → b) → a → a → a```

Takes a function and two values, and returns whichever value produces the larger result when passed to the provided function.

`Example`

```js
//  square :: Number -> Number
const square = n => n * n;

R.maxBy(square, -3, 2);                           //=> -3

R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]);  //=> -5
R.reduce(R.maxBy(square), 0, []);                 //=> 0
```