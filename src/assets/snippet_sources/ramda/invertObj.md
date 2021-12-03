### invertObj

> `{s: x} → {x: s}`

Returns a new object with the keys of the given object as values, and the values of the given object, which are coerced to strings, as keys. Note that the last key found is preferred when handling the same value.

`Example`

```js
const raceResults = {
  first: 'alice',
  second: 'jake',
};
R.invertObj(raceResults);
//=> { 'alice': 'first', 'jake':'second' }

// Alternatively:
const raceResults = ['alice', 'jake'];
R.invertObj(raceResults);
//=> { 'alice': '0', 'jake':'1' }
```
