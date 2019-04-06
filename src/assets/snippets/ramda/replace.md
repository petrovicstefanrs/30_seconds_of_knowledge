### replace

> ```RegExp|String → String → String → String```

Replace a substring or regex match in a string with a replacement.

The first two parameters correspond to the parameters of the `String.prototype.replace()` function, so the second parameter can also be a function.

`Example`

```js
R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'

// Use the "g" (global) flag to replace all occurrences:
R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
```