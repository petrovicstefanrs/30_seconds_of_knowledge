### partial

> `((a, b, c, …, n) → x) → [a, b, c, …] → ((d, e, f, …, n) → x)`

Takes a function `f` and a list of arguments, and returns a function `g`. When applied, `g` returns the result of applying `f` to the arguments provided initially followed by the arguments provided to `g`.

`Example`

```js
const multiply2 = (a, b) => a * b;
const double = R.partial(multiply2, [2]);

double(2); //=> 4

const greet = (salutation, title, firstName, lastName) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

const sayHello = R.partial(greet, ['Hello']);
const sayHelloToMs = R.partial(sayHello, ['Ms.']);

sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
```
