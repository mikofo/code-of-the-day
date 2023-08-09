# Problem

**Difficulty: Medium**

Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's \_.groupBy function.

[See on Leetcode](https://leetcode.com/problems/group-by/description/)

# Solution

See groupBy.js in this directory.

## Statistics

**Completed in 1 min, 50 sec**

![Solution Statistics](https://file%2B.vscode-resource.vscode-cdn.net/Users/michaelfoster/Git/code-of-the-day/2023/August/8/solutionStats.png?version%3D1691596896928)

## Analysis

Solution complexity is O(n). The array must be iterated through completely once.
