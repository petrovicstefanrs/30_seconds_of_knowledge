### Ruby from CMD (Command Line)

Ever wondered how you can use ruby code in the command line?

Running a ruby file from CMD:upcase

```bash
~/: ruby myprogram.rb
```

You can pass in code as a command-line argument to the **ruby** command...

```bash
~/: ruby -e "puts 'Hello World!'"
~/: Hello World!
```

and you have accss to the ARGV array to process additional passed arguments.

```bash
~/: ruby -e 'puts ARGV.inspect' 1 2 3 4
["1", "2", "3", "4"]
```

It is also possible to use the pipe command to execute ruby code.

```bash
~/: echo "puts 'Hello World!'" | ruby
~/: Hello World!
```
