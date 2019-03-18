### Array#count

Ever wondered how much power Ruby's `count` method has? Besides counting the elements of an array, it can do pretty awesome things. So let's start with the most common use case: counting the elements of an array.

```bash
irb> numbers = [1,2,5,3,6,2,5,3]
 => [1, 2, 5, 3, 6, 2, 5, 3]
irb> numbers.count
 => 8
```

Let's say you want to count how often the number 3 is represented in the array. You could use a loop to iterate over the array and increment a counter every time you see the number 3, but there is a better way... Just pass the object you're looking for to the `count` method!

```bash
irb> numbers = [1,2,5,3,6,2,5,3]
 => [1, 2, 5, 3, 6, 2, 5, 3]
irb> numbers.count(3)
 => 2
```

Finally, you can also pass a block to execute more complicated counts.

```bash
irb> numbers = [1,2,5,3,6,2,5,3]
 => [1, 2, 5, 3, 6, 2, 5, 3]
irb> numbers.count(&:even?)
 => 3
```

The method above is basically shorthand for `numbers.count{|n| n.even?}`.

##### Additional links

* [Ruby Doc - `Array#count`](https://ruby-doc.org/core-2.2.0/Array.html#method-i-count)
* [`Symbol#to_proc` Method](https://stackoverflow.com/questions/1217088/what-does-mapname-mean-in-ruby)
