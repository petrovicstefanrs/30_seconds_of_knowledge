### equals

> ```a → b → Boolean```

Returns `true` if its arguments are equivalent, `false` otherwise. Handles cyclical data structures.

Dispatches symmetrically to the equals methods of both arguments, if present.

`Example`

```js
R.equals(1, 1);                 //=> true
R.equals(1, '1');               //=> false
R.equals([1, 2, 3], [1, 2, 3]); //=> true

const a = {}; a.v = a;
const b = {}; b.v = b;

R.equals(a, b);                 //=> true
```