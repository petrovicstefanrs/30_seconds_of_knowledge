### eqProps

> `k → {k: v} → {k: v} → Boolean`

Reports whether two objects have the same value, in `R.equals` terms, for the specified property. Useful as a curried predicate.

`Example`

```js
const o1 = { a: 1, b: 2, c: 3, d: 4 };
const o2 = { a: 10, b: 20, c: 3, d: 40 };

R.eqProps('a', o1, o2); //=> false
R.eqProps('c', o1, o2); //=> true
```
