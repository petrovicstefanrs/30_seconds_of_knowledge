### concat

> `[a] → [a] → [a]` > `String → String → String`

Returns the result of concatenating the given lists or strings.

Note: `R.concat` expects both arguments to be of the same type, unlike the native `Array.prototype.concat` method. It will throw an error if you concat an Array with a non-Array value.

Dispatches to the `concat` method of the first argument, if present. Can also concatenate two members of a `fantasy-land` compatible semigroup.

`Example`

```js
R.concat('ABC', 'DEF'); // 'ABCDEF'
R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
R.concat([], []); //=> []
```
