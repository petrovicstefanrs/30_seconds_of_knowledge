### mergeLeft

> `{k: v} → {k: v} → {k: v}`

Create a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects, the value from the first object will be used.

`Example`

```js
R.mergeLeft({ age: 40 }, { name: 'fred', age: 10 });
//=> { 'name': 'fred', 'age': 40 }

const resetToDefault = R.mergeLeft({ x: 0 });

resetToDefault({ x: 5, y: 2 }); //=> {x: 0, y: 2}
```
