### groupWith

> `((a, a) → Boolean) → [a] → [[a]]`

Takes a list and returns a list of lists where each sublist's elements are all satisfied pairwise comparison according to the provided function. Only adjacent elements are passed to the comparison function.

`Example`

```js
R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
//=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]

R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
//=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]

R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
//=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

R.groupWith(R.eqBy(isVowel), 'aestiou');
//=> ['ae', 'st', 'iou']
```
