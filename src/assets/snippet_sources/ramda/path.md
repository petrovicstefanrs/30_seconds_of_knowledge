### path

> `[Idx] → {a} → a | Undefined` > `Idx = String | Int`

Retrieve the value at a given path.

`Example`

```js
R.path(['a', 'b'], { a: { b: 2 } }); //=> 2
R.path(['a', 'b'], { c: { b: 2 } }); //=> undefined
```
