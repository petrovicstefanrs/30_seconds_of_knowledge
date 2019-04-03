### over

> ```Lens s a → (a → a) → s → s```
> ```Lens s a = Functor f => (a → f a) → s → f s```

Returns the result of "setting" the portion of the given data structure focused by the given lens to the result of applying the given function to the focused value.

`Example`

```js
const headLens = R.lensIndex(0);

R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
```