## Enumerable#any?
Passes each element of the collection to the given block. The method returns true if the block ever returns a value other than false or nil. If the block is not given, Ruby adds an implicit block of `{ |obj| obj }` that will cause `any?` to return true if at least one of the collection members is not false or nil.

```bash
irb> a = []
 => []
irb> a.any?
 => false
irb> a = [1, 'a']
 => [1, "a"]
irb> a.any? { |e| e.class == String }
 => true
irb> h = { a: 1, b: 2 }
 => {:a=>1, :b=>2}
irb> h.any? { |k, v| v.odd? }
 => true
```

* [Ruby Doc - Enumerable#any?](https://ruby-doc.org/core-2.6.1/Enumerable.html#method-i-any-3F)
