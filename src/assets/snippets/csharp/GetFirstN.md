### GetFirstN

#### Description
Returns the first `n` elements in a collection.

Use `IEnumerable.Count()` to check if the enumerable is non-empty.
Use `IEnumerable.Take(n)` to get the first `n` elements.
If the enumerable object is empty, return the `default()` value for the given enumerable.
Omit the second argument, `n`, to use a default value of `1`.

```csharp
public static partial class _30s 
{
  public static IEnumerable<T> GetFirstN<T>(IEnumerable<T> list, int n = 1)
  {
    return list.Count() != 0 ? list.Take(n) : default(IEnumerable<T>);
  }
}
```

```csharp
List<int> nums = new List<int> { 1, 2, 3, 4, 5 };

_30s.GetFirstN(nums); // { 1 }
_30s.GetFirstN(nums, 3); // { 1, 2, 3 }
```
