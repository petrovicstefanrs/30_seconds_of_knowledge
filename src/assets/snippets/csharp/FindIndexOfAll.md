### FindIndexOfAll

#### Description
Returns all indices in an `IList` that match the given predicate function, `match`.

Use `Enumerable.Range()` to iterate over all indices in `data`.
Use `IEnumerable.Where()` to filter out all values in `data` for which `match` returns `false` and return only matching indices.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<int> FindIndexOfAll<T>(IList<T> data, Predicate<T> match)
  {
    return Enumerable
      .Range(0, data.Count())
      .Where(i => match(data[i]));
  }
}
```

```csharp
int[] nums = {1, 2, 4, 5, 2, 2, 4};

_30s.FindIndexOfAll(nums, x => x % 2 != 0); // {0, 3}
```
