### unionWith

> ```((a, a) → Boolean) → [*] → [*] → [*]```

Combines two lists into a set (i.e. no duplicates) composed of the elements of each list. Duplication is determined according to the value returned by applying the supplied predicate to two list elements.

`Example`

```js
const l1 = [{a: 1}, {a: 2}];
const l2 = [{a: 1}, {a: 4}];

R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
```