### Ruby's Benchmark

The Benchmark module provides methods to measure and report the time used to execute Ruby code. This report shows the user CPU time, system CPU time, the sum of the user and system CPU times, and the elapsed real time. The unit of time is seconds. Consider the following example:

```ruby
require 'benchmark'
N = 1_000_000
puts RUBY_DESCRIPTION
Benchmark.bm(15, "concat/append") do |bm|
  concat_report = bm.report("concat") { N.times { 'Hello' +  ' ' +  'World' } }
  append_report = bm.report("append") { N.times { 'Hello' <<  ' ' <<  'World' } }
  [concat_report / append_report]
end
```

```bash
~/: ruby concat_append_benchmark.rb
ruby 2.4.4p296 (2018-03-28 revision 63013) [x86_64-darwin17]
                      user     system      total        real
concat            0.290000   0.000000   0.290000 (  0.608981)
append            0.260000   0.000000   0.260000 (  0.362523)
rescue/condition  1.115385        NaN        NaN (  1.679841)
```

##### Additional links

- [Benchmark](https://ruby-doc.org/stdlib-2.5.0/libdoc/benchmark/rdoc/Benchmark.html)
