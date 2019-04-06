### differenceWith

> ```((a, a) → Boolean) → [a] → [a] → [a]```

Finds the set (i.e. no duplicates) of all elements in the first list not contained in the second list. Duplication is determined according to the value returned by applying the supplied predicate to two list elements.

`Example`

```js
const cmp = (x, y) => x.a === y.a;
const l1 = [{a: 1}, {a: 2}, {a: 3}];
const l2 = [{a: 3}, {a: 4}];

R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
```