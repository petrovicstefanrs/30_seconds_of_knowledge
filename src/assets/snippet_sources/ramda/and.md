### and

> `a → b → a | b`

Returns `true` if both arguments are `true`; `false` otherwise.

`Example`

```js
R.and(true, true); //=> true
R.and(true, false); //=> false
R.and(false, true); //=> false
R.and(false, false); //=> false
```
