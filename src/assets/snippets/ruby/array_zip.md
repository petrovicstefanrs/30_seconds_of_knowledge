### Array#zip

Converts any arguments to arrays, then merges elements of self with corresponding elements from each argument.

This generates a sequence of ary.size n-element arrays, where n is one more than the count of arguments.

If the size of any argument is less than the size of the initial array, nil values are supplied.

If a block is given, it is invoked for each output array, otherwise an array of arrays is returned.

```bash
irb> first_names = ['George', 'Marcus', 'Brian']
 => ["George", "Marcus", "Brian"]
irb> last_names = ['Massy', 'Windmil']
 => ["Massy", "Windmil"]
irb> first_names.zip(last_names)
 => [["George", "Massy"], ["Marcus", "Windmil"], ["Brian", nil]]
irb> last_names.zip(first_names)
 => [["Massy", "George"], ["Windmil", "Marcus"]]
irb> ['Mr.', 'Sir', 'Father'].zip(first_names, last_names)
 => [["Mr.", "George", "Massy"], ["Sir", "Marcus", "Windmil"], ["Father", "Brian", nil]]
```

##### Additional links

* [Ruby Doc - Array#zip](https://ruby-doc.org/core-2.2.0/Array.html#method-i-zip)
