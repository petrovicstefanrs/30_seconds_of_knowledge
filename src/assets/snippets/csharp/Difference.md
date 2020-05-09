### Difference

#### Description
Returns the difference betweend two collections.

Use `IEnumerable.Except()` to only return elements in the second enumerable object and not the first one.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<T> Difference<T>(IEnumerable<T> a, IEnumerable<T> b) 
  {
    return a.Except(b);
  }
}
```

```csharp
int[] a = { 1, 2, 3, 5 };
int[] b = { 1, 2, 4 };

_30s.Difference(a, b); // { 3, 5 }
```
