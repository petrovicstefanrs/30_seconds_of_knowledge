### DistinctValues

#### Description
Returns all distinct values in a collection.

Use `IEnumerable.Distinct()` to get the distinct values in the given collection.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<T> DistinctValues<T>(IEnumerable<T> data) 
  {
    return data.Distinct();
  }
}
```

```csharp
int[] nums =  { 1, 2, 1, 3, 3, 4, 5 };

_30s.DistinctValues(nums); // { 1, 2, 3, 4, 5 }
```
