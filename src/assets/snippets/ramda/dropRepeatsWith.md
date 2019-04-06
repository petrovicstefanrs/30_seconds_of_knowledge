### dropRepeatsWith

> ```((a, a) → Boolean) → [a] → [a]```

Returns a new list without any consecutively repeating elements. Equality is determined by applying the supplied predicate to each pair of consecutive elements. The first element in a series of equal elements will be preserved.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
```