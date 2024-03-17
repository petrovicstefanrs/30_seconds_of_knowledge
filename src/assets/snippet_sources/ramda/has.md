### has

> `s → {s: x} → Boolean`

Returns whether or not an object has an own property with the specified name

`Example`

```js
const hasName = R.has('name');

hasName({ name: 'alice' }); //=> true
hasName({ name: 'bob' }); //=> true
hasName({}); //=> false

const point = { x: 0, y: 0 };
const pointHas = R.has(R.__, point);

pointHas('x'); //=> true
pointHas('y'); //=> true
pointHas('z'); //=> false
```
