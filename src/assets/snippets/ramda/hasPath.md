### hasPath

> ```[Idx] → {a} → Boolean```
> ```Idx = String | Int```

Returns whether or not a path exists in an object. Only the object's own properties are checked.

`Example`

```js
R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
R.hasPath(['a', 'b'], {});                  // => false
```