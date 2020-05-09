### BifurcateBy

#### Description
Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. 
If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.

Use `IEnumerable.Where()` to separate values into two groups and assign them to the two passed `out` arrays.

```csharp
using System.Collections.Generic;
using System.Linq;

public static partial class _30s 
{
  public static void BifurcateBy<T>(IEnumerable<T> items, Predicate<T> filter, out T[] filteredTrue, out T[] filteredFalse)
  {
    filteredTrue = items.Where(i => filter(i) == true).ToArray();
    filteredFalse = items.Where(i => filter(i) == false).ToArray();
  }
}
```

```csharp
int[] nums = {1, 2, 3, 4};
int[] n1;
int[] n2;

_30s.BifurcateBy(nums, x => x % 2 == 0, out n1, out n2); // n1 = {2, 4}, n2 = {1, 3}
```
