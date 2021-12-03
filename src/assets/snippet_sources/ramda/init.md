### init

> `[a] → [a]` > `String → String`

Returns all but the last element of the given list or string.

`Example`

```js
R.init([1, 2, 3]); //=> [1, 2]
R.init([1, 2]); //=> [1]
R.init([1]); //=> []
R.init([]); //=> []

R.init('abc'); //=> 'ab'
R.init('ab'); //=> 'a'
R.init('a'); //=> ''
R.init(''); //=> ''
```
