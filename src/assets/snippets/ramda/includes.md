### includes

> ```a → [a] → Boolean```

Returns `true` if the specified value is equal, in `R.equals` terms, to at least one element of the given list; `false` otherwise. Works also with strings.

`Example`

```js
R.includes(3, [1, 2, 3]);                         //=> true
R.includes(4, [1, 2, 3]);                         //=> false
R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
R.includes([42], [[42]]);                         //=> true
R.includes('ba', 'banana');                       //=>true
```