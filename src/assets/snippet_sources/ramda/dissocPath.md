### dissocPath

> `[Idx] → {k: v} → {k: v}` > `Idx = String | Int`

Makes a shallow clone of an object, omitting the property at the given path. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.

`Example`

```js
R.dissocPath(['a', 'b', 'c'], { a: { b: { c: 42 } } }); //=> {a: {b: {}}}
```
