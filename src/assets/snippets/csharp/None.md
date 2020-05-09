### None

#### Description
Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.

Use `IEnumerable.ToArray()`, `Array.Exists()` to test if all elements in the collection return `false` based on the predicate function, `match`.
Omit the predicate function, `match`, to use the overload that checks if each value is `null` by default.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static bool None<T>(IEnumerable<T> data, Predicate<T> match) 
  {
    return !Array.Exists(data.ToArray(), match);
  }
  public static bool None<T>(IEnumerable<T> data) 
  {
    return Array.Exists(data.ToArray(), val => val == null);
  }
}
```

```csharp
int[] nums = { 4, 2, 3 };

_30s.None(nums, x => x < 0); // true
_30s.None(nums); // false
```
