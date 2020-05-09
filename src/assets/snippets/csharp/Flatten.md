### Flatten

#### Description
Flattens a 2D collection into a single dimension.

Use `IEnumerable.SelectMany()` to flatten the 2D enumerable object.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static IEnumerable<T> Flatten<T>(IEnumerable<IEnumerable<T>> obj) 
  {
    return obj.SelectMany(v => v);
  }
}
```

```csharp
int[][] x = {
  new [] {1, 2, 3},
  new [] {4, 5, 6}
};

_30s.Flatten(x); // {1, 2, 3, 4, 5, 6}
```
