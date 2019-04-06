### findLast

> ```(a → Boolean) → [a] → a | undefined```

Returns the last element of the list which matches the predicate, or `undefined` if no element matches.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const xs = [{a: 1, b: 0}, {a:1, b: 1}];
R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
R.findLast(R.propEq('a', 4))(xs); //=> undefined
```