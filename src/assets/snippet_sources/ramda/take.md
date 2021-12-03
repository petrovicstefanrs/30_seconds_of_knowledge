### take

> `Number → [a] → [a]` > `Number → String → String`

Returns the first `n` elements of the given list, string, or transducer/transformer (or object with a take method).

Dispatches to the take method of the second argument, if present.

`Example`

```js
R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.take(3, 'ramda'); //=> 'ram'

const personnel = [
  'Dave Brubeck',
  'Paul Desmond',
  'Eugene Wright',
  'Joe Morello',
  'Gerry Mulligan',
  'Bob Bates',
  'Joe Dodge',
  'Ron Crotty',
];

const takeFive = R.take(5);

takeFive(personnel);
//=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
```
