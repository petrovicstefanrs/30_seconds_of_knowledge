### IsNotA

#### Description
Returns `true` if the given object is not of the specified type, `false` otherwise.

Use the `is` operator to check if `obj` is not of the given type, `T`.

```csharp
public static partial class _30s 
{
  public static bool IsNotA<T>(object obj) 
  {
    return !(obj is T);
  }
}
```

```csharp
string s = "fooBar";

_30s.IsNotA<string>(s); // false
_30s.IsNotA<int>(s); // true
```
