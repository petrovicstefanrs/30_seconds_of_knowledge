### Yesterday

#### Description
Returns yesterday's `DateTime` value.

Use `DateTime.Now` to get the current date, then use `DateTime.AddDays(-1)` to decrement by `1`.

```csharp
public static partial class _30s 
{
  public static DateTime Yesterday() 
  {
    return DateTime.Now.AddDays(-1);
  }
}
```

```csharp
_30s.Yesterday(); // 12/20/2019 11:00:49 AM (if it's 12/21/2019 11:00:49 AM)
```
