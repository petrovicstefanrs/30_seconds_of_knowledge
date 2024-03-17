### contains

> `a → [a] → Boolean`

Returns true if the specified value is equal, in `R.equals` terms, to at least one element of the given list; false otherwise. Works also with strings.

`Example`

```js
R.contains(3, [1, 2, 3]); //=> true
R.contains(4, [1, 2, 3]); //=> false
R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
R.contains([42], [[42]]); //=> true
R.contains('ba', 'banana'); //=>true
```
