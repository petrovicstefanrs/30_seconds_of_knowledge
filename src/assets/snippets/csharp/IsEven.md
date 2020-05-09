### IsEven

#### Description
Returns `true` if the given number is even, `false` otherwise.

Check whether a number is odd or even using the modulo (`%`) operator. 
Return `true` if the number is even, `false` if the number is odd.

```csharp
public static partial class _30s 
{
  public static bool IsEven(int n) 
  {
    return n % 2 == 0;
  }
}
```

```csharp
_30s.IsEven(2); // true
_30s.IsEven(3); // false
```
