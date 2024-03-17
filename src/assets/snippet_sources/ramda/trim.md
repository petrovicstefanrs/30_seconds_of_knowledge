### trim

> `String → String`

Removes (strips) whitespace from both ends of the string.

`Example`

```js
R.trim('   xyz  '); //=> 'xyz'
R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
```
