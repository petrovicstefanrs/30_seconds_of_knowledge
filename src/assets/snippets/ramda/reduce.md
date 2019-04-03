### reduce

> ```((a, b) → a) → a → [b] → a```

Returns a single item by iterating through the list, successively calling the iterator function and passing it an accumulator value and the current value from the array, and then passing the result to the next call.

The iterator function receives two values: `(acc, value)`. It may use `R.reduced` to shortcut the iteration.

The arguments' order of `reduceRight`'s iterator function is `(value, acc)`.

Note: `R.reduce` does not skip deleted or unassigned indices (sparse arrays), unlike the native `Array.prototype.reduce` method.

Dispatches to the `reduce` method of the third argument, if present. When doing so, it is up to the user to handle the `R.reduced` shortcuting, as this is not implemented by `reduce`.

`Example`

```js
R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
//          -               -10
//         / \              / \
//        -   4           -6   4
//       / \              / \
//      -   3   ==>     -3   3
//     / \              / \
//    -   2           -1   2
//   / \              / \
//  0   1            0   1
```