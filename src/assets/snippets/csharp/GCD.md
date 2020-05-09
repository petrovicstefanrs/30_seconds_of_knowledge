### GCD

#### Description
Calculates the greatest common divisor of the given numbers.

Define a `GCD()` function for two numbers, which uses recursion.
Base case is when `y` equals `0`, which returns `x`.
Otherwise the GCD of `y` and the remainder of the division `x/y` is returned.
Define an overload that accepts multiple numbers or an array and use `IEnumerable.Aggregate()` to apply `GCD()` to them.

```csharp
using System.Linq;

public static partial class _30s 
{
  public static int GCD(params int[] nums)
  {
    return nums.Aggregate(GCD);
  }
  public static int GCD(int x, int y)
  {
    return y == 0 ? x : GCD(y, x % y);
  }
}
```

```csharp
_30s.GCD(8, 36, 28); // 4
```
