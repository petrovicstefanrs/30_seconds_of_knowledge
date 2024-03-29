### tail

> `[a] → [a]` > `String → String`

Returns all but the first element of the given list or string (or object with a tail method).

Dispatches to the slice method of the first argument, if present.

`Example`

```js
R.tail([1, 2, 3]); //=> [2, 3]
R.tail([1, 2]); //=> [2]
R.tail([1]); //=> []
R.tail([]); //=> []

R.tail('abc'); //=> 'bc'
R.tail('ab'); //=> 'b'
R.tail('a'); //=> ''
R.tail(''); //=> ''
```
