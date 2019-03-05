### Integer#digits(base)

Calling `digits` on an integer returns the array including the digits extracted by place-value notation with radix base of int.

```bash
irb> 123.digits
 => [3, 2, 1]
irb> 14.digits(7)
 => [0, 2]
 ```

 ##### Additional links

* [Ruby Doc - Integer#digits](https://ruby-doc.org/core-2.4.0/Integer.html#method-i-digits)
