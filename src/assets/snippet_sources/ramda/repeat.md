### repeat

> `a → n → [a]`

Returns a fixed list of size `n` containing a specified identical value.

`Example`

```js
R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']

const obj = {};
const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]

repeatedObjs[0] === repeatedObjs[1]; //=> true
```
