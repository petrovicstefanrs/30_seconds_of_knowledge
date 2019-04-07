### tap

> ```(a → *) → a → a```

Runs the given function with the supplied object, then returns the object.

Acts as a transducer if a transformer is given as second parameter.

`Example`

```js
const sayX = x => console.log('x is ' + x);

R.tap(sayX, 100); //=> 100
// logs 'x is 100'
```