### map vs. each

The way the `map` method works in Ruby is, it takes an enumerable object, (i.e. the object you call it on), and a block.

Then, for each of the elements in the enumerable, it executes the block, passing it the current element as an argument. The result of evaluating the block is then used to construct the resulting array.

In other words:

> Applying map on an array returns a new array where each element is the result of evaluating the block with the element as an argument.

```bash
irb> a = [1, 2, 3]
 => [1, 2, 3]
irb> b = a.map { |n| n * 2 }
 => [2, 4, 6]
irb> b
 => [2, 4, 6]
```

`each` is just another method on an object. That means that if you want to iterate over an array with `each`, you’re calling the `each` method on that array object.

It takes a list as it’s first argument and a block as the second argument. For every element in the list, it runs the block passing it the current element as a parameter.

You should use `each` when you want iteration but don’t care about what it returns.

[1, 2, 3].each { |n| puts "Current number is: #{n}" }

```bash
irb> [1, 2, 3].each { |n| puts "Current number is: #{n}" }
 Current number is: 1
 Current number is: 2
 Current number is: 3
 => [1, 2, 3]
irb> a = [1, 2, 3]
 => [1, 2, 3]
irb> b = a.each { |n| n * 2 }
 => [1, 2, 3]
irb> b
 => [1, 2, 3]
```