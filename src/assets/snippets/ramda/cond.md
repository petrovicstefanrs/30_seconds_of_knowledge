### cond

> ```[[(*… → Boolean),(*… → *)]] → (*… → *)```

Returns a function, `fn`, which encapsulates `if/else`, `if/else`, ... logic. `R.cond` takes a list of `[predicate, transformer]` pairs. All of the arguments to `fn` are applied to each of the predicates in turn until one returns a "truthy" value, at which point `fn` returns the result of applying its arguments to the corresponding transformer. If none of the predicates matches, `fn` returns undefined.

`Example`

```js
const fn = R.cond([
  [R.equals(0),   R.always('water freezes at 0°C')],
  [R.equals(100), R.always('water boils at 100°C')],
  [R.T, temp => 'nothing special happens at ' + temp + '°C']
]);

fn(0);    //=> 'water freezes at 0°C'
fn(50);   //=> 'nothing special happens at 50°C'
fn(100);  //=> 'water boils at 100°C'
```