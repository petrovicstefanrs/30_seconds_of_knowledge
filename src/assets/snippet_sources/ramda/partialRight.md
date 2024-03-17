### partialRight

> `((a, b, c, …, n) → x) → [d, e, f, …, n] → ((a, b, c, …) → x)`

Takes a function `f` and a list of arguments, and returns a function `g`. When applied, `g` returns the result of applying `f` to the arguments provided to `g` followed by the arguments provided initially.

`Example`

```js
const greet = (salutation, title, firstName, lastName) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);

greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
```
