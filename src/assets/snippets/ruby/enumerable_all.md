### Enumerable#all?
Passes each element of the collection to the given block. The method returns true if the block never returns false or nil. If the block is not given, Ruby adds an implicit block of `{ |obj| obj }` which will cause `all?` to return true when none of the collection members are false or nil.

```bash
irb> a = [1, 2, 3]
 => [1, 2, 3]
irb> a.all?(&:integer?)
 => true
irb> a.all?(&:odd?)
 => false
irb> a.all?
 => true
irb> a = [1, 2, nil]
 => [1, 2, nil]
a.all?
 => false
```

##### Additional links

* [Ruby Doc - Enumerable#all?](https://ruby-doc.org/core-2.6.1/Enumerable.html#method-i-all-3F)
