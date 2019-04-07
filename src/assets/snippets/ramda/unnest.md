### unnest

> ```Chain c => c (c a) → c a```

Shorthand for `R.chain(R.identity)`, which removes one level of nesting from any `Chain`.

`Example`

```js
R.unnest([1, [2], [[3]]]);          //=> [1, 2, [3]]
R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
```