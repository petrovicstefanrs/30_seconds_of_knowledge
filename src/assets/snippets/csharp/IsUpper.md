### IsUpper

#### Description
Checks if a string is upper case.

Convert the given string to upper case, using  `string.ToUpper()`  and compare it to the original.

```csharp
public static partial class _30s 
{
  public static bool IsUpper(string str) 
  {
    return str.ToUpper() == str;
  }
}
```

```csharp
string s1 = "ABC";
string s2 = "cDe";

_30s.IsUpper(s1); // true
_30s.IsUpper(s2); // false
```
