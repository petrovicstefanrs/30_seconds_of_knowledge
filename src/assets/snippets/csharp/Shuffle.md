### Shuffle

#### Description
Randomizes the order of the values of an `IList`, updating the original `IList` object.

Use the [Fisher-Yates algorithm](
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates%27_original_method) to reorder the elements of the given `IList` object.

```csharp
using System.Collections.Generic;

public static partial class _30s 
{
  public static void Shuffle<T>(IList<T> list)
  {
    Random rand = new Random();
    for (int n = list.Count() - 1 ; n > 0 ; n--)
    {
      int k = rand.Next(n + 1);
      T value = list[k];
      list[k] = list[n];
      list[n] = value;
    }
  }
}
```

```csharp
List<int> nums = new List<int> { 1, 2, 3, 4, 5, 6 };
int[] arr = { 1, 2, 3, 4, 5, 6 };

_30s.Shuffle(nums); // nums = { 3, 5, 2, 1, 4, 6 }
_30s.Shuffle(arr); // arr = { 6, 2, 5, 1, 4, 3 }
```
