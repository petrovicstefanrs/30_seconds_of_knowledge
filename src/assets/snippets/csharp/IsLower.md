### IsLower

#### Description
Checks if a string is lower case.

Convert the given string to lower case, using  `string.ToLower()`  and compare it to the original.

```csharp
public static partial class _30s 
{
  public static bool IsLower(string str) 
  {
    return str.ToLower() == str;
  }
}
```

```csharp
string s1 = "abc";
string s2 = "cDe";

_30s.IsLower(s1); // true
_30s.IsLower(s2); // false
```
