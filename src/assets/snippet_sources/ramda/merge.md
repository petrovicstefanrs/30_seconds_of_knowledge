### merge

> `{k: v} → {k: v} → {k: v}`

Create a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects, the value from the second object will be used.

`Example`

```js
R.merge({ name: 'fred', age: 10 }, { age: 40 });
//=> { 'name': 'fred', 'age': 40 }

const withDefaults = R.merge({ x: 0, y: 0 });

withDefaults({ y: 2 }); //=> {x: 0, y: 2}
```
