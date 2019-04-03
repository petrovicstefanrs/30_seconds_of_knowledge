### when

> ```(a → Boolean) → (a → a) → a → a```

Tests the final argument by passing it to the given predicate function. If the predicate is satisfied, the function will return the result of calling the `whenTrueFn` function with the same argument. If the predicate is not satisfied, the argument is returned as is.

`Example`

```js
// truncate :: String -> String
const truncate = R.when(
  R.propSatisfies(R.gt(R.__, 10), 'length'),
  R.pipe(R.take(10), R.append('…'), R.join(''))
);

truncate('12345');         //=> '12345'
truncate('0123456789ABC'); //=> '0123456789…'
```