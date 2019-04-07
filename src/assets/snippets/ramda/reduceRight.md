### reduceRight

> ```((a, b) → b) → b → [a] → b```

Returns a single item by iterating through the list, successively calling the iterator function and passing it an accumulator value and the current value from the array, and then passing the result to the next call.

Similar to `reduce`, except moves through the input list from the right to the left.

The iterator function receives two values: `(value, acc)`, while the arguments' order of `reduce`'s iterator function is `(acc, value)`.

Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse arrays), unlike the native `Array.prototype.reduceRight` method.

`Example`

```js
R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
//    -               -2
//   / \              / \
//  1   -            1   3
//     / \              / \
//    2   -     ==>    2  -1
//       / \              / \
//      3   -            3   4
//         / \              / \
//        4   0            4   0
```