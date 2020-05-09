### MaxDateTime

#### Description
Returns the maximum of two `DateTime` values.

Use the conditional operator (`?:`) to return the maximum of the two values.

```csharp
public static partial class _30s 
{
  public static DateTime MaxDateTime(DateTime d1, DateTime d2) 
  {
    return (d1 > d2) ? d1 : d2;
  }
}
```

```csharp
DateTime d1 = new DateTime(DateTime.MaxValue.Ticks);
DateTime d2 = new DateTime(DateTime.MinValue.Ticks);

_30s.MaxDateTime(d1, d2); // 12/31/9999 11:59:59 PM
```
