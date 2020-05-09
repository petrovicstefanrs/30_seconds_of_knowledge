### SymmetricDifference

#### Description
Returns the symmetric difference betweend two collections.

Use `IEnumerable.Except()` to only return elements in one enumerable object and not the other.
Use `IEnumerable.Union()` to combine the result of applying that to each object.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<T> SymmetricDifference<T>(IEnumerable<T> a, IEnumerable<T> b) 
  {
    return a.Except(b).Union(b.Except(a));
  }
}
```

```csharp
int[] a = { 1, 2, 3, 5 };
int[] b = { 1, 2, 4 };

_30s.SymmetricDifference(a, b); // { 3, 5, 4 }
```
