### dissoc

> ```String → {k: v} → {k: v}```

Returns a new object that does not contain a prop property.

`Example`

```js
R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
```