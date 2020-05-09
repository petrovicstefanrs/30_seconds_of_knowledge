### ToKebabCase

#### Description
Converts a string to kebab case.

Use `Regex.Matches()` with an appropriate regular expression to break the string into words.
Use `string.Join()` and `string.ToLower()` to convert the words to lowercase and combine them adding `-` as a separator.

```csharp
using System.Text.RegularExpressions;

public static partial class _30s 
{
  public static string ToKebabCase(string str) 
  {
    Regex pattern = new Regex(@"[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+");
    return string.Join("-", pattern.Matches(str)).ToLower();
  }
}
```

```csharp
_30s.ToKebabCase("camelCase"); // "camel-case"
_30s.ToKebabCase("some text"); // "some-text"
_30s.ToKebabCase("some-mixed_string With spaces_underscores-and-hyphens"); // "some-mixed-string-with-spaces-underscores-and-hyphens"
_30s.ToKebabCase("AllThe-small Things"); // "all-the-small-things"
```
