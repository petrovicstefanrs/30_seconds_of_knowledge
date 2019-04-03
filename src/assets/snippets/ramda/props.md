### props

> ```[k] → {k: v} → [v]```

Acts as multiple prop: array of keys in, array of values out. Preserves order.

`Example`

```js
R.props(['x', 'y'], {x: 1, y: 2});      //=> [1, 2]
R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]

const fullName = R.compose(R.join(' '), R.props(['first', 'last']));

fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
```