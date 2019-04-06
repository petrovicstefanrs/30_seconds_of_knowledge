### multiply

> ```Number → Number → Number```

Multiplies two numbers. Equivalent to `a * b` but curried.

`Example`

```js
const double = R.multiply(2);
const triple = R.multiply(3);

double(3);       //=>  6
triple(4);       //=> 12

R.multiply(2, 5);  //=> 10
```