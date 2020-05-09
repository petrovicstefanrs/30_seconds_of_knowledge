### LCM

#### Description
Calculates the least common multiple of the given numbers.

Define a `_GCD()` method that determines the greatest common divisor, using recursion.
Use `_GCD()` and the fact that `LCM(x, y) = x * y / GCD(x,y)` to determine the least common multiple.
Use `IEnumerable.Aggregate()` to apply `LCM()` to all the given arguments.

```csharp
using System.Linq;

public static partial class _30s 
{
  public static int LCM(params int[] nums)
  {
    return nums.Aggregate((x,y) => (x * y) / _GCD(x, y));
  }
  private static int _GCD(int x, int y)
  {
    return y == 0 ? x : _GCD(y, x % y);
  }
}
```

```csharp
_30s.LCM(1, 3, 4, 5); // 60
_30s.LCM(new [] {12, 7}); // 84
```
