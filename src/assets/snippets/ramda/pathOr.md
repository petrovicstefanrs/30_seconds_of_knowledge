### pathOr

> ```a → [Idx] → {a} → a```
> ```Idx = String | Int```

If the given, non-null object has a value at the given path, returns the value at that path. Otherwise returns the provided default value.

`Example`

```js
R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
```