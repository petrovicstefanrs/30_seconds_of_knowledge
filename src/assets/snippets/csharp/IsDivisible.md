### IsDivisible

#### Description
Checks if the first numeric argument is divisible by the second one.

Use the modulo operator (`%`) to check if the remainder is equal to `0`.

```csharp
public static partial class _30s 
{
  public static bool IsDivisible(long dividend, long divisor) 
  {
    return dividend % divisor == 0;
  }
}
```

```csharp
_30s.IsDivisible(6, 3); // true
```
