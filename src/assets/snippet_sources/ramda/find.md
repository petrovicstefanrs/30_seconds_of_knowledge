### find

> `(a → Boolean) → [a] → a | undefined`

Returns the first element of the list which matches the predicate, or `undefined` if no element matches.

Dispatches to the find method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];

R.find(R.propEq('a', 2))(xs); //=> {a: 2}
R.find(R.propEq('a', 4))(xs); //=> undefined
```
