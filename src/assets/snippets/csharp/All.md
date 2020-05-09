### All

#### Description
Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.

Use `IEnumerable.ToArray()`, `Array.TrueForAll()` to test if all elements in the collection return `true` based on the predicate function, `match`.
Omit the predicate function, `match`, to use the overload that checks if each value is different from `null` by default.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static bool All<T>(IEnumerable<T> data, Predicate<T> match) 
  {
    return Array.TrueForAll(data.ToArray(), match);
  }
  public static bool All<T>(IEnumerable<T> data) 
  {
    return Array.TrueForAll(data.ToArray(), val => val != null);
  }
}
```

```csharp
int[] nums = { 4, 2, 3 };

_30s.All(nums, x => x > 1); // true
_30s.All(nums); // true
```
