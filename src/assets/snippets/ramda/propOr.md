### propOr

> ```a → String → Object → a```

If the given, non-null object has an own property with the specified name, returns the value of that property. Otherwise returns the provided default value.

`Example`

```js
const alice = {
  name: 'ALICE',
  age: 101
};
const favorite = R.prop('favoriteLibrary');
const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

favorite(alice);              //=> undefined
favoriteWithDefault(alice);   //=> 'Ramda'
```