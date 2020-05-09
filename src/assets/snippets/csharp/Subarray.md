### Subarray

#### Description
Returns a subarray of the given array starting at the given index and having the specified length.

Use `ArraySegment()` with the given array, `arr`, `start` and `length` to get the subarray.
Convert the result to an array, using `ArraySegment.ToArray()`.

```csharp
using System.Collections.Generic;

public static partial class _30s 
{
  public static T[] Subarray<T>(T[] arr, int start, int length) 
  {
    return new ArraySegment<T>( arr, start, length ).ToArray();
  }
}
```

```csharp
int[] nums = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

_30s.Subarray(nums,3,6); // {3, 4, 5, 6, 7, 8}
```
