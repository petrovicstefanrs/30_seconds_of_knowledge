### IsOdd

#### Description
Returns `true` if the given number is odd, `false` otherwise.

Check whether a number is odd or even using the modulo (`%`) operator. 
Return `true` if the number is odd, `false` if the number is even.

```csharp
public static partial class _30s 
{
  public static bool IsOdd(int n) 
  {
    return n % 2 != 0;
  }
}
```

```csharp
_30s.IsOdd(3); // true
_30s.IsOdd(4); // false
```
