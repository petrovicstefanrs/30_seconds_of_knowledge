### findLastIndex

> `(a → Boolean) → [a] → Number`

Returns the index of the last element of the list which matches the predicate, or -1 if no element matches.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const xs = [
  { a: 1, b: 0 },
  { a: 1, b: 1 },
];

R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
```
