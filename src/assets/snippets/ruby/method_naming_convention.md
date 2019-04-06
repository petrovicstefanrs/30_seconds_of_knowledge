### Method Naming Conventions "!" vs. "?"

In Ruby there are two common naming conventions for methods. Either you end a method name with a **!** or **?**.
Methods ended by a **!** are called bang methods and often modifies the original object.

``` bash
irb> book_title = "example book title"
 => "example book title"
irb> puts book_title.capitalize!
Example book title
 => nil
irb> puts book_title
Example book title
 => nil
irb>
```

A famous example is `merge` vs `merge!` when dealing with params, whereas the former method will return the params and the latest modifies the original params.

The question mark at the end of a method name indicates that we can expect a boolean as return value.

```bash
irb> array = []
 => []
irb> array.empty?
 => true
irb> user = { 'first_name' => 'Bob', 'last_name' => 'Carlton' }
irb> user.has_key?('first_name')
 => true
```
