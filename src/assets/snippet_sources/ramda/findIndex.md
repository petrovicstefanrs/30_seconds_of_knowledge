### findIndex

> `(a → Boolean) → [a] → Number`

Returns the index of the first element of the list which matches the predicate, or -1 if no element matches.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];

R.findIndex(R.propEq('a', 2))(xs); //=> 1
R.findIndex(R.propEq('a', 4))(xs); //=> -1
```
