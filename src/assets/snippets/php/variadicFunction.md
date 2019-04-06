### variadicFunction

A variadic function is a function of indefinite arity, i.e., one which accepts a variable number of arguments.
The example shows variadicSum function, that takes an indefinite number of integers and returns their sum.

```php
function variadicSum(...$nums)
{
    $sum = 0;
    foreach($nums as $num) {
        $sum += $num;
    }
    return $sum;
}
```

```php
variadicSum(1, 2); // 3
variadicSum(1, 2, 3, 4); // 10
```
