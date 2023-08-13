# Problem

**Difficulty: Medium**

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) \* n otherwise.

# Solution

See memoize.js in this directory. I wrote two solutions, one optimized for runtime and one optimized for memory usage.

## Statistics

## Optimized for Runtime

![Solution Statistics for optimized runtime](solutionStats_runtime.png)

## Optimized for Memory

![Solution Statistics for optimized memory usage](solutionStats_mem.png)

## Analysis

Runtime complexity is O(1) since we call a function with a unique set of inputs for the first time or perform a lookup in the cache. The memory complexity is 0(n) since at worst we must store every set of inputs.
