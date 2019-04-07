### lensProp

> ```String → Lens s a```
> ```Lens s a = Functor f => (a → f a) → s → f s```

Returns a lens whose focus is the specified property.

`Example`

```js
const xLens = R.lensProp('x');

R.view(xLens, {x: 1, y: 2});            //=> 1
R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
```