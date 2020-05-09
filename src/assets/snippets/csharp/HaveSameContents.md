### HaveSameContents

#### Description
Returns `true` if two collections contain the same elements regardless of order, `false` otherwise.

Use `IEnumerable.GroupBy()` to create groups for each distinct value in each collection, `IEnumerable.ToDictionary()` to convert the result to a `Dictionary`.
Use `IEnumerable.Union()` and `IEnumerable.Distinct()` to find the distinct values from both collections and loop over them using a `foreach` loop.
Use `Dictionary.ContainsKey()` to check that each distinct value exists in both collections and compare the count for each one.
Return `false` if any value is not found in either collection or if any count does not match, `true` otherwise.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static bool HaveSameContents<T>(IEnumerable<T> a, IEnumerable<T> b)
  {
    Dictionary<T,int> dA = a.GroupBy(v => v).ToDictionary(v => v.Key, v => v.Count());
    Dictionary<T,int> dB = b.GroupBy(v => v).ToDictionary(v => v.Key, v => v.Count());
    foreach (T val in a.Union(b).Distinct()) {
      if (!dA.ContainsKey(val) || !dB.ContainsKey(val)) return false;
      if (dA[val] != dB[val]) return false;
    }
    return true;
  }
}
```

```csharp
int[] a = {1, 2, 4};
int[] b = {2, 4, 1};

_30s.HaveSameContents(a, b); // true
```
