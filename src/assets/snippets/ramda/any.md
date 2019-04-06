### any

> ```(a → Boolean) → [a] → Boolean```

Returns `true` if at least one of the elements of the list match the predicate, `false` otherwise.

Dispatches to the any method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const lessThan0 = R.flip(R.lt)(0);
const lessThan2 = R.flip(R.lt)(2);

R.any(lessThan0)([1, 2]); //=> false
R.any(lessThan2)([1, 2]); //=> true
```