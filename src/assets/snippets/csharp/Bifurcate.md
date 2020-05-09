### Bifurcate

#### Description
Splits values into two groups. 
If an element in `filter` is `true`, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

Use `IEnumerable.Where()` to separate values into two groups and assign them to the two passed `out` arrays.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static void Bifurcate<T>(IEnumerable<T> items, IList<bool> filter, out T[] filteredTrue, out T[] filteredFalse)
  {
    filteredTrue = items.Where((val, i) => filter[i] == true).ToArray();
    filteredFalse = items.Where((val, i) => filter[i] == false).ToArray();
  }
}
```

```csharp
int[] nums = {1, 2, 3, 4};
bool[] filter = {true, true, false, true};
int[] n1;
int[] n2;

_30s.Bifurcate(nums, filter, out n1, out n2); // // n1 = {1, 2, 4}, n2 = {3}
```
