### any

Returns `true` if the provided function returns `true` for at least one element of an array, `false` otherwise.

```php
function any(array $items, callable $func)
{
    foreach ($items as $item)
    {
        if ($func($item))
        {
            return true;
        }
    }
    return false;
}
```

```php
any([1, 2, 3, 4], function ($item) {
    return $item < 2;
}); // true
```
