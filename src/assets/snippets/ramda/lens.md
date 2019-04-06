### lens

> ```(s → a) → ((a, s) → s) → Lens s a```
> ```Lens s a = Functor f => (a → f a) → s → f s```

Returns a lens for the given `getter` and `setter` functions. The `getter` "gets" the value of the focus; the `setter` "sets" the value of the focus. The `setter` should not mutate the data structure.

`Example`

```js
const xLens = R.lens(R.prop('x'), R.assoc('x'));

R.view(xLens, {x: 1, y: 2});            //=> 1
R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
```