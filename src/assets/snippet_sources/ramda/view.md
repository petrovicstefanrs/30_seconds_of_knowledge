### view

> `Lens s a → s → a` > `Lens s a = Functor f => (a → f a) → s → f s`

Returns a "view" of the given data structure, determined by the given lens. The lens's focus determines which portion of the data structure is visible.

`Example`

```js
const xLens = R.lensProp('x');

R.view(xLens, { x: 1, y: 2 }); //=> 1
R.view(xLens, { x: 4, y: 2 }); //=> 4
```
