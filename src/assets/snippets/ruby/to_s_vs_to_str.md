### to_s vs. to_str

`to_s` is an explicit casting helper and is used to transform a value from one type to another. `to_str` is an implicit casting helper
with the same purpose. The difference is that the former will always return a string whereas the later will result in an error or data loss
if the value it acts on does not act like the type we are casting. Ruby will only return a value when objects act like the type.
Ruby is very strict when using an implicit casting helper to ensure that the value acts like the type we want.

```bash
irb> [1, 2].to_s
 => "[1, 2]"
irb> [1, 2].to_str
NoMethodError: undefined method `to_str` for [1, 2]:Array
Did you mean? to_s
irb> :name.to_s
 => "name"
irb> :name.to_str
NoMethodError: undefined method `to_str` for :name:Symbol
Did you mean? to_s
```
