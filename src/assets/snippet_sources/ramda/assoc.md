### assoc

> `String → a → {k: v} → {k: v}`

Makes a shallow clone of an object, setting or overriding the specified property with the given value. Note that this copies and flattens prototype properties onto the new object as well. All non-primitive properties are copied by reference.

`Example`

```js
R.assoc('c', 3, { a: 1, b: 2 }); //=> {a: 1, b: 2, c: 3}
```
