### dropLast

> ```Number → [a] → [a]```
> ```Number → String → String```

Returns a list containing all but the last n elements of the given list.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
R.dropLast(3, 'ramda');               //=> 'ra'
```