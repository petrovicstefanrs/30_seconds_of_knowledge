### set

> `Lens s a → a → s → s` > `Lens s a = Functor f => (a → f a) → s → f s`

Returns the result of "setting" the portion of the given data structure focused by the given lens to the given value.

`Example`

```js
const xLens = R.lensProp('x');

R.set(xLens, 4, { x: 1, y: 2 }); //=> {x: 4, y: 2}
R.set(xLens, 8, { x: 1, y: 2 }); //=> {x: 8, y: 2}
```
