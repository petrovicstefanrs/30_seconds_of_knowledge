### lambda vs. proc

A **lambda** is a way to define a block & its parameters with some special syntax. You can save this **lambda** into a variable for later use.

The syntax for defining a Ruby **lambda** looks like this:

```bash
irb > say_something = -> { puts "This is a lambda" }
 => #<Proc:0x0000556829fa2fa8@(irb):1 (lambda)>
```

Defining a **lambda** won’t run the code inside it, just like defining a method won’t run the method, you need to use the call method for that.

```bash
irb > say_something = -> { puts "This is a lambda" }
 => #<Proc:0x0000556829fa2fa8@(lambda)>
irb > say_something.call
 This is a lambda
 => nil
```

**Procs** are a very similar concept. But one of the differences is how you create them.

```bash
irb > my_proc = Proc.new { |x| puts x }
 => #<Proc:0x0000556829f8ad68@>
```

There is no dedicated **Lambda** class. A **lambda** is just a special **Proc** object. If you take a look at the instance methods from **Proc**, you will notice there is a `lambda?` method.

```bash
irb > my_proc = Proc.new { |x| puts x }
 => #<Proc:0x0000556829f8ad68@>
irb > my_proc.lambda?
 => false
irb > my_lambda = -> { puts "This is a lambda" }
 => #<Proc:0x0000556829f59a60@(lambda)>
irb > my_lambda.lambda?
 => true
```

A **proc** behaves differently than a **lambda**, specially when it comes to arguments. Procs don’t care about the correct number of arguments, while lambdas will raise an exception.

```bash
irb > my_proc = Proc.new { |x,y| puts "I do not care about arguments!" }
 => #<Proc:0x0000556829f8ad68@>
irb > my_proc.call
 I do not care about arguments!
 => nil
irb > my_lambda = -> x { "x = #{x}" }
 => #<Proc:0x000056145b4325e0@(lambda)>
irb > my_lambda.call
 ArgumentError (wrong number of arguments (given 0, expected 1))
irb > my_lambda.call(10)
 => "x = 10"
```

##### Additional links

* [Ruby Guides - Lambdas vs Procs](https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/)