### filter

> ```Filterable f => (a → Boolean) → f a → f a```

Takes a predicate and a Filterable, and returns a new filterable of the same type containing the members of the given filterable which satisfy the given predicate. Filterable objects include plain objects or any object that has a filter method such as Array.

Dispatches to the `filter` method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const isEven = n => n % 2 === 0;

R.filter(isEven, [1, 2, 3, 4]);             //=> [2, 4]
R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
```