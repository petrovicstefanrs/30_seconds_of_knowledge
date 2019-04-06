### split

> ```(String | RegExp) → String → [String]```

Splits a string into an array of strings based on the given separator.

`Example`

```js
const pathComponents = R.split('/');
R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']

R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
```