### DuplicateValues

#### Description
Returns all distinct values in a collection.

Use `IEnumerable.GroupBy()` to create groups for each distinct value in the enumerable.
Use `IEnumerable.Where()` to create select only the groups with a count greater than `1`.
Use `IEnumerable.Select()` to return the `Key` property of each group.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<T> DuplicateValues<T>(IEnumerable<T> items)
  {
    return items
      .GroupBy(c => c)
      .Where(g => g.Count() > 1)
      .Select(i => i.Key);
  }
}
```

```csharp
int[] arr = {1, 2, 1, 3, 2, 4};

_30s.DuplicateValues(arr); // {1, 2}
```
