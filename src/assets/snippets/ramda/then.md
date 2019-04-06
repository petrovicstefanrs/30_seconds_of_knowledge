### then

> ```(a → b) → (Promise e a) → (Promise e b)```
> ```(a → (Promise e b)) → (Promise e a) → (Promise e b)```

Returns the result of applying the `onSuccess` function to the value inside a successfully resolved promise. This is useful for working with `promises` inside function compositions.

`Example`

```js
var makeQuery = (email) => ({ query: { email }});

//getMemberName :: String -> Promise ({firstName, lastName})
var getMemberName = R.pipe(
  makeQuery,
  fetchMember,
  R.then(R.pick(['firstName', 'lastName']))
);
```