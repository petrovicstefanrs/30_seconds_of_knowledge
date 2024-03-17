### gte

> `Ord a => a → a → Boolean`

Returns `true` if the first argument is greater than or equal to the second; `false` otherwise.

`Example`

```js
R.gte(2, 1); //=> true
R.gte(2, 2); //=> true
R.gte(2, 3); //=> false
R.gte('a', 'z'); //=> false
R.gte('z', 'a'); //=> true
```
