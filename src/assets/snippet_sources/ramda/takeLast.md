### takeLast

> `Number → [a] → [a]` > `Number → String → String`

Returns a new list containing the last `n` elements of the given list. If `n > list.length`, returns a list of `list.length` elements.

`Example`

```js
R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.takeLast(3, 'ramda'); //=> 'mda'
```
