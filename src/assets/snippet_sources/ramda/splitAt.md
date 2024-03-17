### splitAt

> `Number → [a] → [[a], [a]]` > `Number → String → [String, String]`

Splits a given list or string at a given index.

`Example`

```js
R.splitAt(1, [1, 2, 3]); //=> [[1], [2, 3]]
R.splitAt(5, 'hello world'); //=> ['hello', ' world']
R.splitAt(-1, 'foobar'); //=> ['fooba', 'r']
```
