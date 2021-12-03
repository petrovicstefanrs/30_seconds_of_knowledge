### zipWith

> `((a, b) → c) → [a] → [b] → [c]`

Creates a new list out of the two supplied by applying the function to each equally-positioned pair in the lists. The returned list is truncated to the length of the shorter of the two input lists.

`Example`

```js
const f = (x, y) => {
  // ...
};

R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
//=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
```
