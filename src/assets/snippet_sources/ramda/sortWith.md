### sortWith

> `[(a, a) → Number] → [a] → [a]`

Sorts a list according to a list of comparators.

`Example`

```js
const alice = {
  name: 'alice',
  age: 40,
};

const bob = {
  name: 'bob',
  age: 30,
};

const clara = {
  name: 'clara',
  age: 40,
};

const people = [clara, bob, alice];
const ageNameSort = R.sortWith([
  R.descend(R.prop('age')),
  R.ascend(R.prop('name')),
]);

ageNameSort(people); //=> [alice, clara, bob]
```
