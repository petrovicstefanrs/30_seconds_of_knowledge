### call

> ```(*… → a),*… → a```

Returns the result of calling its first argument with the remaining arguments. This is occasionally useful as a converging function for `R.converge` the first branch can produce a function while the remaining branches produce values to be passed to that function as its arguments.

`Example`

```js
R.call(R.add, 1, 2); //=> 3

const indentN = R.pipe(R.repeat(' '),
                     R.join(''),
                     R.replace(/^(?!$)/gm));

const format = R.converge(R.call, [
                            R.pipe(R.prop('indent'), indentN),
                            R.prop('value')
                        ]);

format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
```