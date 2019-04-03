### mergeAll

> ```[{k: v}] → {k: v}```

Merges a list of objects together into one object.

`Example`

```js
R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
```