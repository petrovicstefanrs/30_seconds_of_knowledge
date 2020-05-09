### ToSnakeCase

#### Description
Converts a string to snake case.

Use `Regex.Matches()` with an appropriate regular expression to break the string into words.
Use `string.Join()` and `string.ToLower()` to convert the words to lowercase and combine them adding `_` as a separator.

```csharp
using System.Text.RegularExpressions;

public static partial class _30s 
{
  public static string ToSnakeCase(string str) 
  {
    Regex pattern = new Regex(@"[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+");
    return string.Join("_", pattern.Matches(str)).ToLower();
  }
}
```

```csharp
_30s.ToSnakeCase("camelCase"); // "camel_case"
_30s.ToSnakeCase("some text"); // "some_text"
_30s.ToSnakeCase("some-mixed_string With spaces_underscores-and-hyphens"); // "some_mixed_string_with_spaces_underscores_and_hyphens"
_30s.ToSnakeCase("AllThe-small Things"); // "all_the_small_things"
```
