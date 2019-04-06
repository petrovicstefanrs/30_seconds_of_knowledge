### or

> ```a → b → a | b```

Returns `true` if one or both of its arguments are `true`. Returns `false` if both arguments are `false`.

`Example`

```js
R.or(true, true);   //=> true
R.or(true, false);  //=> true
R.or(false, true);  //=> true
R.or(false, false); //=> false
```