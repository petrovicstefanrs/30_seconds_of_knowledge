### FindFirstBy

#### Description
Returns the first element in a collection that matches the given predicate function, `match`.

Use `IEnumerable.Where()` to filter out all values in `data` for which `match` returns `false`.
Use `IEnumerable.First()` to return only the first matching element.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static T FindFirstBy<T>(IEnumerable<T> data, Predicate<T> match)
  {
    return data.Where(i => match(i)).First();
  }
}
```

```csharp
int[] nums = {1, 2, 4, 5, 2, 2, 4};

_30s.FindFirstBy(nums, x => x % 2 == 0); // 2
```
