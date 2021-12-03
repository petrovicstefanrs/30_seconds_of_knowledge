### pathSatisfies

> `(a → Boolean) → [Idx] → {a} → Boolean` > `Idx = String | Int`

Returns `true` if the specified object property at given path satisfies the given predicate; `false` otherwise.

`Example`

```js
R.pathSatisfies((y) => y > 0, ['x', 'y'], { x: { y: 2 } }); //=> true
```
