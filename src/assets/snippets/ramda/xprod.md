### xprod

> ```[a] → [b] → [[a,b]]```

Creates a new list out of the two supplied by creating each possible pair from the lists.

`Example`

```js
R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```