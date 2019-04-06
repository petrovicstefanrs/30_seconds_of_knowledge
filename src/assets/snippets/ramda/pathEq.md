### pathEq

> ```[Idx] → a → {a} → Boolean```
> ```Idx = String | Int```

Determines whether a nested path on an object has a specific value, in `R.equals` terms. Most likely used to filter a list.

`Example`

```js
const user1 = { address: { zipCode: 90210 } };
const user2 = { address: { zipCode: 55555 } };
const user3 = { name: 'Bob' };
const users = [ user1, user2, user3 ];
const isFamous = R.pathEq(['address', 'zipCode'], 90210);

R.filter(isFamous, users); //=> [ user1 ]
```