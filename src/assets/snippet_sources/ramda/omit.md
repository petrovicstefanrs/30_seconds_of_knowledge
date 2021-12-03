### omit

> `[String] → {String: *} → {String: *}`

Returns a partial copy of an object omitting the keys specified.

`Example`

```js
R.omit(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> {b: 2, c: 3}
```
