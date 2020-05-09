### RandomDoubleInRange

#### Description
Returns a random double in the specified range.

Use `Random.NextDouble()` to generate a random value and map it to the desired range using multiplication.

```csharp
public static partial class _30s 
{
  public static double RandomDoubleInRange(double min, double max) 
  {
    return (new Random().NextDouble() * (max - min)) + min;
  }
}
```

```csharp
_30s.RandomDoubleInRange(0.5, 5); // 2.20486941011849
```
