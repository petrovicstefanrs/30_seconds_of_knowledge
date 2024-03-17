### all

> `(a → Boolean) → [a] → Boolean`

Returns `true` if all elements of the list match the predicate, `false` if there are any that don't.

Dispatches to the all method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const equals3 = R.equals(3);

R.all(equals3)([3, 3, 3, 3]); //=> true
R.all(equals3)([3, 3, 1, 3]); //=> false
```
