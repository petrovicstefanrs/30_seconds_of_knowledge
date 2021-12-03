### zip

> `[a] → [b] → [[a,b]]`

Creates a new list out of the two supplied by pairing up equally-positioned items from both lists. The returned list is truncated to the length of the shorter of the two input lists.

Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.

`Example`

```js
R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
```
