### compose

> ```((y → z), (x → y), …, (o → p), ((a, b, …, n) → o)) → ((a, b, …, n) → z)```

Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.

Note: The result of compose is not automatically curried.

`Example`

```js
const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
const yellGreeting = R.compose(R.toUpper, classyGreeting);

yellGreeting('James', 'Bond');                    //=> "THE NAME'S BOND, JAMES BOND"

R.compose(Math.abs, R.add(1), R.multiply(2))(-4)  //=> 7
```