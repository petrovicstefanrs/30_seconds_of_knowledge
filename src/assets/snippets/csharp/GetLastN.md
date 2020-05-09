### GetLastN

#### Description
Returns the last `n` elements in a collection.

Use `IEnumerable.Count()` to check if the enumerable is non-empty.
Use `IEnumerable.Skip(list.Count() - n)` to get the last `n` elements.
If the enumerable object is empty, return the `default()` value for the given enumerable.
Omit the second argument, `n`, to use a default value of `1`.

```csharp
public static partial class _30s 
{
  public static IEnumerable<T> GetLastN<T>(IEnumerable<T> list, int n = 1)
  {
    return list.Count() != 0 ? list.Skip(list.Count() - n) : default(IEnumerable<T>);
  }
}
```

```csharp
List<int> nums = new List<int> { 1, 2, 3, 4, 5 };

_30s.GetLastN(nums); // { 5 }
_30s.GetLastN(nums, 3); // { 3, 4, 5 }
```
