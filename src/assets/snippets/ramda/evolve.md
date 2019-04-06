### evolve

> ```{k: (v → v)} → {k: v} → {k: v}```

Creates a new object by recursively evolving a shallow copy of object, according to the transformation functions. All non-primitive properties are copied by reference.

A transformation function will not be invoked if its corresponding key does not exist in the evolved object.

`Example`

```js
const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
const transformations = {
  firstName: R.trim,
  lastName: R.trim, // Will not get invoked.
  data: {elapsed: R.add(1), remaining: R.add(-1)}
};
R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
```