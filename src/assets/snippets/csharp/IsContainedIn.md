### IsContainedIn

#### Description
Returns `true` if the elements of the first collection are contained in the second one regardless of order, `false` otherwise.

Use `IEnumerable.GroupBy()` to create groups for each distinct value in each collection, `IEnumerable.ToDictionary()` to convert the result to a `Dictionary`.
Use `IEnumerable.Distinct()` to find the distinct values from the first collection and loop over them using a `foreach` loop.
Use `Dictionary.ContainsKey()` to check that each distinct value exists in the second collection and compare the count for each one.
Return `false` if any value is not found in the second collection or if any count in it is lower than in the first one, `true` otherwise.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static bool IsContainedIn<T>(IEnumerable<T> a, IEnumerable<T> b) 
  {
    Dictionary<T,int> dA = a.GroupBy(v => v).ToDictionary(v => v.Key, v => v.Count());
    Dictionary<T,int> dB = b.GroupBy(v => v).ToDictionary(v => v.Key, v => v.Count());
    foreach(T val in a.Distinct()) {
      if (!dB.ContainsKey(val)) return false;
      if (dA[val] > dB[val]) return false;
    }
    return true;
  }
}
```

```csharp
int[] a = {1, 4};
int[] b = {2, 4, 1};

_30s.IsContainedIn(a, b); // true
```
