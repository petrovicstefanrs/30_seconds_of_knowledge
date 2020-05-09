### KeepUpToN

#### Description
Filters a collection keeping up to `n` occurences of each value.

Use `IEnumerable.Distinct()` in combination with `IEnumerable.ToDictionary()` to create a dictionary with an initial count of `0` for each distinct value in `data`.
Use `IEnumerable.Where()` to filter out occurences after the `n`th one for each element, using the previously created dictionary.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<T> KeepUpToN<T>(IEnumerable<T> data, int n)
  {
    var occurences = data.Distinct().ToDictionary(i => i, value => 0);
    return data.Where(i => occurences[i]++ < n);
  }
}
```

```csharp
int[] nums = {1, 1, 2, 3, 3, 3, 1};

_30s.KeepUpToN(nums, 2); // {1, 1, 2, 3, 3}
```
