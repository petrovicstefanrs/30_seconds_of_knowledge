### mergeDeepLeft

> ```{a} → {a} → {a}```

Creates a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects and both values are objects, the two values will be recursively merged otherwise the value from the first object will be used.

`Example`

```js
R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
                { age: 40, contact: { email: 'baa@example.com' }});
//=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
```