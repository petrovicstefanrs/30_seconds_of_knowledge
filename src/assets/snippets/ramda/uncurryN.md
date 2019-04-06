### uncurryN

> ```Number → (a → b) → (a → c)```

Returns a function of arity n from a (manually) curried function.

`Example`

```js
const addFour = a => b => c => d => a + b + c + d;

const uncurriedAddFour = R.uncurryN(4, addFour);

uncurriedAddFour(1, 2, 3, 4); //=> 10
```