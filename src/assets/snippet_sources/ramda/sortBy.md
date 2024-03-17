### sortBy

> `Ord b => (a → b) → [a] → [a]`

Sorts the list according to the supplied function.

`Example`

```js
const sortByFirstItem = R.sortBy(R.prop(0));
const pairs = [
  [-1, 1],
  [-2, 2],
  [-3, 3],
];

sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]

const sortByNameCaseInsensitive = R.sortBy(
  R.compose(R.toLower, R.prop('name'))
);

const alice = {
  name: 'ALICE',
  age: 101,
};

const bob = {
  name: 'Bob',
  age: -10,
};

const clara = {
  name: 'clara',
  age: 314.159,
};

const people = [clara, bob, alice];

sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
```
