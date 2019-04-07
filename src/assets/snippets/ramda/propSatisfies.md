### propSatisfies

> ```(a → Boolean) → String → {String: a} → Boolean```

Returns `true` if the specified object property satisfies the given predicate; `false` otherwise. You can test multiple properties with `R.where`.

`Example`

```js
R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
```