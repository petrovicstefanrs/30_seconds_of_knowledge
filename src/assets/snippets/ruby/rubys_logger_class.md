### Ruby's logger class

The Ruby Logger class gives you a way to generate logs with a default output format & different levels of importance.

```ruby
  logger = Logger.new("my_log_file.txt")
```

For logging to the terminal just pass `STDOUT`.

```ruby
  logger = Logger.new(STDOUT)
```

Logger levels are:

- **UNKNOWN:** An unknown message that should always be logged.

- **FATAL:** An unhandleable error that results in a program crash.

- **ERROR:** A handleable error condition.

- **WARN:** A warning.

- **INFO:** Generic (useful) information about system operation.

- **DEBUG:** Low-level information for developers.

Default log format is:

```bash
SeverityID, [DateTime pid] SeverityLabel -- ProgName: message
```

For instance:

```bash
I, [1999-03-03T02:34:24.895701 19074]  INFO -- Main: info.
```

#### Additional links

- [Ruby Doc - Logger](https://ruby-doc.org/stdlib-2.4.0/libdoc/logger/rdoc/Logger.html)
