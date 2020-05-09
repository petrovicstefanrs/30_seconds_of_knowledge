### IsA

#### Description
Returns `true` if the given object is of the specified type, `false` otherwise.

Use the `is` operator to check if `obj` is of the given type, `T`.

```csharp
public static partial class _30s 
{
  public static bool IsA<T>(object obj) 
  {
    return obj is T;
  }
}
```

```csharp
string s = "fooBar";

_30s.IsA<string>(s); // true
_30s.IsA<int>(s); // false
```
