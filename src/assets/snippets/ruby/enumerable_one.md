## Enumerable#one?
Passes each element of the collection to the given block. The method returns true if the block returns true exactly once. If the block is not given, `one?` will return true only if exactly one of the collection members is true.

```bash
irb> a = [500]
 => [500]
irb> a.one?
 => true
irb> a.one? { |e| e < 100 }
 => false
irb> (1..4).one? { |n| n % 2 == 0 }
 => false
```

##### Additional links

* [Ruby Doc - Enumerable#one?](https://ruby-doc.org/core-2.6.1/Enumerable.html#method-i-one-3F)
