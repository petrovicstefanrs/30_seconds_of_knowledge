### last

> `[a] → a | Undefined` > `String → String`

Returns the last element of the given list or string.

`Example`

```js
R.last(['fi', 'fo', 'fum']); //=> 'fum'
R.last([]); //=> undefined

R.last('abc'); //=> 'c'
R.last(''); //=> ''
```
