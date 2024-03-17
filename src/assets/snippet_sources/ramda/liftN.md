### liftN

> `Number → (*… → *) → ([*]… → [*])`

"lifts" a function to be the specified arity, so that it may "map over" that many lists, Functions or other objects that satisfy the `FantasyLand Apply` spec.

`Example`

```js
const madd3 = R.liftN(3, (...args) => R.sum(args));

madd3([1, 2, 3], [1, 2, 3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
```
