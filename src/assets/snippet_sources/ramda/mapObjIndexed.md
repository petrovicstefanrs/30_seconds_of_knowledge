### mapObjIndexed

> `((*, String, Object) → *) → Object → Object`

An Object-specific version of map. The function is applied to three arguments: `(value, key, obj)`. If only the value is significant, use `map` instead.

`Example`

```js
const xyz = { x: 1, y: 2, z: 3 };
const prependKeyAndDouble = (num, key, obj) => key + num * 2;

R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
```
