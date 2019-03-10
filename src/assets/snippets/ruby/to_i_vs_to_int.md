### to_i vs. to_int

`to_i` is an explicit casting helper and is used to transform a value from one type to another. `to_int` is an implicit casting helper
with the same purpose. The difference is that the former will always return a string whereas the later will result in an error or data loss
if the value it acts on does not act like the type we are casting. Ruby will only return a value when objects act like the type.
Ruby is very strict when using an implicit casting helper to ensure that the value acts like the type we want.

```bash
irb> 19.99.to_i
 => 19
irb> 19.99.to_int
 => 19
irb> '19.99'.to_i
 => 19
irb> '19.99'.to_int
NoMethodError: undefined method `to_int` for "String":String
Did you mean?  to_i
               to_str
```
