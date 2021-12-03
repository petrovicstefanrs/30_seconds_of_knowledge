### reverse

> `[a] → [a]` > `String → String`

Returns a new list or string with the elements or characters in reverse order.

`Example`

```js
R.reverse([1, 2, 3]); //=> [3, 2, 1]
R.reverse([1, 2]); //=> [2, 1]
R.reverse([1]); //=> [1]
R.reverse([]); //=> []

R.reverse('abc'); //=> 'cba'
R.reverse('ab'); //=> 'ba'
R.reverse('a'); //=> 'a'
R.reverse(''); //=> ''
```
