### GetType

#### Description
Returns the type of the given object.

Use `typeof()` on the given object's type.

```csharp
public static partial class _30s 
{
  public static Type GetType<T>(T obj) 
  {
    return typeof(T);
  }
}
```

```csharp
string s = "fooBar";
List<string> list = new List<string> { "a", "b", "c" };

_30s.GetType(s); // System.String
_30s.GetType(list); // System.Collections.Generic.List`1[System.String]
```
