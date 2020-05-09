### MinDateTime

#### Description
Returns the minimum of two `DateTime` values.

Use the conditional operator (`?:`) to return the minimum of the two values.

```csharp
public static partial class _30s 
{
  public static DateTime MinDateTime(DateTime d1, DateTime d2) 
  {
    return (d1 < d2) ? d1 : d2;
  }
}
```

```csharp
DateTime d1 = new DateTime(DateTime.MaxValue.Ticks);
DateTime d2 = new DateTime(DateTime.MinValue.Ticks);

_30s.MinDateTime(d1, d2); // 1/1/0001 12:00:00 AM
```
