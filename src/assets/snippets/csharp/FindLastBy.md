### FindLastBy

#### Description
Returns the last element in a collection that matches the given predicate function, `match`.

Use `IEnumerable.Where()` to filter out all values in `data` for which `match` returns `false`.
Use `IEnumerable.Last()` to return only the last matching element.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static T FindLastBy<T>(IEnumerable<T> data, Predicate<T> match)
  {
    return data.Where(i => match(i)).Last();
  }
}
```

```csharp
int[] nums = {1, 2, 4, 5, 2, 2, 4};

_30s.FindLastBy(nums, x => x % 2 == 0); // 4
```
