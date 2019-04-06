### otherwise

> ```(e → b) → (Promise e a) → (Promise e b)```
> ```(e → (Promise f b)) → (Promise e a) → (Promise f b)```

Returns the result of applying the `onFailure` function to the value inside a failed `promise`. This is useful for handling rejected promises inside function compositions.

`Example`

```js
var failedFetch = (id) => Promise.reject('bad ID');
var useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' })

//recoverFromFailure :: String -> Promise ({firstName, lastName})
var recoverFromFailure = R.pipe(
  failedFetch,
  R.otherwise(useDefault),
  R.then(R.pick(['firstName', 'lastName'])),
);

recoverFromFailure(12345).then(console.log)
```