## Enumerable#none?
Passes each element of the collection to the given block. The method returns true if the block never returns true for all elements. If the block is not given, `none?` will return true only if none of the collection members is true.

```bash
irb> a = []
 => []
irb> a.none?
 => true
irb> a = ['a', 'bb', 'c']
 => ["a", "bb", "c"]
irb> a.none? { |e| e.length > 1 }
 => false
irb> (1..10).none?(&:nil?)
 => true
```

##### Additional links

* [Ruby Doc - Enumerable#none?](https://ruby-doc.org/core-2.6.1/Enumerable.html#method-i-none-3F)
