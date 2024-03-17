### move

> `Number → Number → [a] → [a]`

Move an item, at `index` from, to `index` to, in a list of elements. A new list will be created containing the new elements order.

`Example`

```js
R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation
```
