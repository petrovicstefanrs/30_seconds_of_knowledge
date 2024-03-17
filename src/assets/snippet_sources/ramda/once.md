### once

> `(a… → b) → (a… → b)`

Accepts a function `fn` and returns a function that guards invocation of `fn` such that `fn` can only ever be called once, no matter how many times the returned function is invoked. The first value calculated is returned in subsequent invocations.

`Example`

```js
const addOneOnce = R.once((x) => x + 1);

addOneOnce(10); //=> 11
addOneOnce(addOneOnce(50)); //=> 11
```
