### pipeP

> ```((a → Promise b), (b → Promise c), …, (y → Promise z)) → (a → Promise z)```

Performs left-to-right composition of one or more `Promise-returning` functions. The leftmost function may have any arity. The remaining functions must be unary.

`Example`

```js
//  followersForUser :: String -> Promise [User]
const followersForUser = R.pipeP(db.getUserById, db.getFollowers);
```