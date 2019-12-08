### to_h vs. to_hash

`to_h` is an explicit casting helper and is used to transform a value from one type to another. `to_hash` is an implicit casting helper
with the same purpose. The difference is that the former will always return a string whereas the later will result in an error or data loss
if the value it acts on does not act like the type we are casting. Ruby will only return a value when objects act like the type.
Ruby is very strict when using an implicit casting helper to ensure that the value acts like the type we want.

```bash
irb > rue.to_s
 => "true"
irb > true.to_str
=> NoMethodError: undefined method `to_str' for true:TrueClass
Did you mean?  to_s
```
