### clone vs dup

Both methods are used to produce a shallow copy of obj—the instance variables of obj are copied, but not the objects they reference. `clone` copies the frozen and tainted state of obj whereas `dup` copies the tainted state of obj.

In general, clone and dup may have different semantics in the descendant classes. While clone is used to duplicate an object, including its internal state, dup typically uses the class of the descendant object to create the new instance. When using dup, any modules that the object has been extended with will not be copied.

```bash
irb> array = ['a','b','c']
 => ["a", "b", "c"]
irb> array.freeze
 => ["a", "b", "c"]
irb> array_clone = array.clone
 => ["a", "b", "c"]
irb> a_clone << "d"
RuntimeError: cant modify frozen Array
irb> array_dup = array.dup
 => ["a", "b", "c"]
irb> a_dup << "d"
 => ["a", "b", "c", "d"]
```

##### Additional links

* [Ruby Doc - #clone](https://ruby-doc.org/core-2.0.0/Object.html#method-i-clone)
* [Ruby Doc - #dup](https://ruby-doc.org/core-2.6.1/Object.html#method-i-dup)
