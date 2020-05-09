### Tomorrow

#### Description
Returns tomorrow's `DateTime` value.

Use `DateTime.Now` to get the current date, then use `DateTime.AddDays(1)` to increment by `1`.

```csharp
public static partial class _30s 
{
  public static DateTime Tomorrow() 
  {
    return DateTime.Now.AddDays(1);
  }
}
```

```csharp
_30s.Tomorrow(); // 12/22/2019 11:00:49 AM (if it's 12/21/2019 11:00:49 AM)
```
