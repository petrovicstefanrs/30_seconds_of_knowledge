### forEachObjIndexed

> ```((a, String, StrMap a) → Any) → StrMap a → StrMap a```

Iterate over an input object, calling a provided function fn for each key and value in the object.

`fn` receives three argument: `(value, key, obj)`.

`Example`

```js
const printKeyConcatValue = (value, key) => console.log(key + ':' + value);

R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
// logs x:1
// logs y:2
```