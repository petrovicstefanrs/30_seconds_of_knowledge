### drop

> `Number → [a] → [a]` > `Number → String → String`

Returns all but the first n elements of the given list, string, or transducer/transformer (or object with a drop method).

Dispatches to the drop method of the second argument, if present.

`Example`

```js
R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
R.drop(3, ['foo', 'bar', 'baz']); //=> []
R.drop(4, ['foo', 'bar', 'baz']); //=> []
R.drop(3, 'ramda'); //=> 'da'
```
