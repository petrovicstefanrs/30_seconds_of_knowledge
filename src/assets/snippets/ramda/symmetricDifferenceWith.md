### symmetricDifferenceWith

> ```((a, a) → Boolean) → [a] → [a] → [a]```

Finds the set (i.e. no duplicates) of all elements contained in the first or second list, but not both. Duplication is determined according to the value returned by applying the supplied predicate to two list elements.

`Example`

```js
const eqA = R.eqBy(R.prop('a'));
const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
```