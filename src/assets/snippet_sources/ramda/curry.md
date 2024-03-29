### curry

> `(* → a) → (* → a)`

Returns a curried equivalent of the provided function. The curried function has two unusual capabilities. First, its arguments needn't be provided one at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the following are equivalent:

```js
g(1)(2)(3);
g(1)(2, 3);
g(1, 2)(3);
g(1, 2, 3);
```

Secondly, the special placeholder value `R.__` may be used to specify "gaps", allowing partial application of any combination of arguments, regardless of their positions. If `g` is as above and `_` is `R.__`, the following are equivalent:

```js
g(1, 2, 3);
g(_, 2, 3)(1);
g(_, _, 3)(1)(2);
g(_, _, 3)(1, 2);
g(_, 2)(1)(3);
g(_, 2)(1, 3);
g(_, 2)(_, 3)(1);
```

`Example`

```js
const addFourNumbers = (a, b, c, d) => a + b + c + d;

const curriedAddFourNumbers = R.curry(addFourNumbers);
const f = curriedAddFourNumbers(1, 2);
const g = f(3);

g(4); //=> 10
```
