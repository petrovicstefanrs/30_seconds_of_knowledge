### FindParityOutliers

#### Description
Given a collection, returns the items that are parity outliers.

Use `IEnumerable.GroupBy()` to create groups for each parity (`0` and `1`).
Use `IEnumerable.OrderBy()` in combination with `IEnumerable.Count()` to order the two groups in ascending order based on frequency.
Use `IEnumerable.First()` to get the first element and return its `Key` property, which corresponds to the least common parity value.
Finally, use `IEnumerable.Where()` to get all elements with the least common parity value.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<int> FindParityOutliers(IEnumerable<int> items)
  {
    return items.Where(
      i => i % 2 == items
        .GroupBy(i => i % 2)
        .OrderBy(i => i.Count())
        .First()
        .Key
    );
  }
}
```

```csharp
int[] nums = {1, 2, 3, 4, 6};

_30s.FindParityOutliers(nums); // {1, 3}
```
