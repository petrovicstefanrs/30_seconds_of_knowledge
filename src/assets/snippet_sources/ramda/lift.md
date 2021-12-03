### lift

> `(*… → *) → ([*]… → [*])`

"lifts" a function of arity `>` 1 so that it may "map over" a list, Function or other object that satisfies the `FantasyLand Apply` spec.

`Example`

```js
const madd3 = R.lift((a, b, c) => a + b + c);

madd3([1, 2, 3], [1, 2, 3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]

const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);

madd5([1, 2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
```
