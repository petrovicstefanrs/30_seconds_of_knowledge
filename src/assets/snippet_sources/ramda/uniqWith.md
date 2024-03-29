### uniqWith

> `((a, a) → Boolean) → [a] → [a]`

Returns a new list containing only one copy of each element in the original list, based upon the value returned by applying the supplied predicate to two list elements. Prefers the first item if two items compare equal based on the predicate.

`Example`

```js
const strEq = R.eqBy(String);

R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
R.uniqWith(strEq)([{}, {}]); //=> [{}]
R.uniqWith(strEq)([1, '1', 1]); //=> [1]
R.uniqWith(strEq)(['1', 1, 1]); //=> ['1']
```
