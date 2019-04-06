### invoker

> ```Number → String → (a → b → … → n → Object → *)```

Turns a named method with a specified arity into a function that can be called directly supplied with arguments and a target object.

The returned function is curried and accepts arity + 1 parameters where the final parameter is the target object.

`Example`

```js
const sliceFrom = R.invoker(1, 'slice');

sliceFrom(6, 'abcdefghijklm');  //=> 'ghijklm'

const sliceFrom6 = R.invoker(2, 'slice')(6);

sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
```