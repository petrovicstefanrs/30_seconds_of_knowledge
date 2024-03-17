### subtract

> `Number → Number → Number`

Subtracts its second argument from its first argument.

`Example`

```js
R.subtract(10, 8); //=> 2

const minus5 = R.subtract(R.__, 5);

minus5(17); //=> 12

const complementaryAngle = R.subtract(90);

complementaryAngle(30); //=> 60
complementaryAngle(72); //=> 18
```
