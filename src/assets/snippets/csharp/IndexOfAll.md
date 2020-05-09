### IndexOfAll

#### Description
Returns all indices of `n` in an `IList`.

Use `Enumerable.Range()` to iterate over all indices in `data`.
Use `Enumerable.Where()` in combination with `object.Equals()` to compare each value in `data` to `n` and return only matching indices.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<int> IndexOfAll<T>(IList<T> data, T n)
  {
    return Enumerable
      .Range(0, data.Count())
      .Where(i => object.Equals(n, data[i]));
  }
}
```

```csharp
int[] nums = {1, 2, 4, 5, 2, 2, 4};

_30s.IndexOfAll(_30s.IndexOfAll(nums, 2)); // {1, 4, 5}
```
