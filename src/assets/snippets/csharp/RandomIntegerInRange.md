### RandomIntegerInRange

#### Description
Returns a random integer in the specified range.

Use `Random.Next()` to generate an integer in the desired range.

```csharp
public static partial class _30s 
{
  public static int RandomIntegerInRange(int min, int max) 
  {
    return new Random().Next(min, max);
  }
}
```

```csharp
_30s.RandomIntegerInRange(0, 5); // 2
```
