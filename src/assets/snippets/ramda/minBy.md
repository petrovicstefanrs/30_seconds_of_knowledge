### minBy

> ```Ord b => (a → b) → a → a → a```

Takes a function and two values, and returns whichever value produces the smaller result when passed to the provided function.

`Example`

```js
//  square :: Number -> Number
const square = n => n * n;

R.minBy(square, -3, 2);                                 //=> 2

R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
R.reduce(R.minBy(square), Infinity, []);                //=> Infinity
```