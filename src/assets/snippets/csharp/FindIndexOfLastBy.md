### FindIndexOfLastBy

#### Description
Returns the last index in an `IList` that matches the given predicate function, `match`.

Use `Enumerable.Range()` to iterate over all indices in `data`.
Use `IEnumerable.Where()` to filter out all values in `data` for which `match` returns `false`.
Use `IEnumerable.Last()` to return only the last matching index.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static int FindIndexOfLastBy<T>(IList<T> data, Predicate<T> match)
  {
    return Enumerable
      .Range(0, data.Count())
      .Where(i => match(data[i]))
      .Last();
  }
}
```

```csharp
int[] nums = {1, 2, 4, 5, 2, 2, 4};

_30s.FindIndexOfLastBy(nums, x => x % 2 == 0); // 6
```
