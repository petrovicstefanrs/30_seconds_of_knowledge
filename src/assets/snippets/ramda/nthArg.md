### nthArg

> ```Number → *… → *```

Returns a function which returns its nth argument.

`Example`

```js
R.nthArg(1)('a', 'b', 'c');   //=> 'b'
R.nthArg(-1)('a', 'b', 'c');  //=> 'c'
```