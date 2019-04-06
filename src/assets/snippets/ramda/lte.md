### lte

> ```Ord a => a → a → Boolean```

Returns `true` if the first argument is less than or equal to the second; `false` otherwise.

`Example`

```js
R.lte(2, 1);      //=> false
R.lte(2, 2);      //=> true
R.lte(2, 3);      //=> true
R.lte('a', 'z');  //=> true
R.lte('z', 'a');  //=> false
```