### head

> `[a] → a | Undefined` > `String → String`

Returns the first element of the given list or string. In some libraries this function is named first.

`Example`

```js
R.head(['fi', 'fo', 'fum']); //=> 'fi'
R.head([]); //=> undefined

R.head('abc'); //=> 'a'
R.head(''); //=> ''
```
