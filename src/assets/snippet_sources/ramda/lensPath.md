### lensPath

> `[Idx] → Lens s a` > `Idx = String | Int` > `Lens s a = Functor f => (a → f a) → s → f s`

Returns a lens whose focus is the specified path.

`Example`

```js
const xHeadYLens = R.lensPath(['x', 0, 'y']);

R.view(xHeadYLens, {
  x: [
    { y: 2, z: 3 },
    { y: 4, z: 5 },
  ],
});
//=> 2
R.set(xHeadYLens, 1, {
  x: [
    { y: 2, z: 3 },
    { y: 4, z: 5 },
  ],
});
//=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
R.over(xHeadYLens, R.negate, {
  x: [
    { y: 2, z: 3 },
    { y: 4, z: 5 },
  ],
});
//=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
```
