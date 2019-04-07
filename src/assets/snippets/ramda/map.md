### map

> ```Functor f => (a → b) → f a → f b```

Takes a function and a functor, applies the function to each of the functor's values, and returns a functor of the same shape.

Ramda provides suitable map implementations for `Array` and `Object`, so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.

Dispatches to the map method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

Also treats functions as functors and will compose them together.

`Example`

```js
const double = x => x * 2;

R.map(double, [1, 2, 3]);           //=> [2, 4, 6]

R.map(double, {x: 1, y: 2, z: 3});  //=> {x: 2, y: 4, z: 6}
```