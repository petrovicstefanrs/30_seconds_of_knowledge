### ToTitleCase

#### Description
Converts a string to title case.

Use `Regex.Matches()` with an appropriate regular expression to break the string into words.
Use `string.Join()` and `string.ToLower()` to convert the words to lowercase and combine them adding ` ` as a separator.
Use `CultureInfo.TextInfo.ToTitleCase()` on the result to convert it to title case.

```csharp
using System.Globalization;
using System.Text.RegularExpressions;

public static partial class _30s 
{
  public static string ToTitleCase(string str) 
  {
    Regex pattern = new Regex(@"[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+");
    return new CultureInfo("en-US", false)
      .TextInfo
      .ToTitleCase(
        string.Join(" ", pattern.Matches(str)).ToLower()
      );
  }
}
```

```csharp
_30s.ToTitleCase("some_database_field_name"); // "Some Database Field Name"
_30s.ToTitleCase("Some label that needs to be title-cased"); // "Some Label That Needs To Be Title Cased"
_30s.ToTitleCase("some-package-name"); // "Some Package Name"
_30s.ToTitleCase("some-mixed_string with spaces_underscores-and-hyphens"); // "Some Mixed String With Spaces Underscores And Hyphens"
```
