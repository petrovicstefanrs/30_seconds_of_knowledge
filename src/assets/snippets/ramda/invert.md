### invert

> ```{s: x} → {x: [ s, … ]}```

Same as `R.invertObj`, however this accounts for objects with duplicate values by putting the values into an array.

`Example`

```js
const raceResultsByFirstName = {
  first: 'alice',
  second: 'jake',
  third: 'alice',
};
R.invert(raceResultsByFirstName);
//=> { 'alice': ['first', 'third'], 'jake':['second'] }
```