### lensIndex

> `Number → Lens s a` > `Lens s a = Functor f => (a → f a) → s → f s`

Returns a lens whose focus is the specified index.

`Example`

```js
const headLens = R.lensIndex(0);

R.view(headLens, ['a', 'b', 'c']); //=> 'a'
R.set(headLens, 'x', ['a', 'b', 'c']); //=> ['x', 'b', 'c']
R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
```
