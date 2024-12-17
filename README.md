# JavaScript Null Value Handling

This repository demonstrates a common JavaScript error related to handling null values within functions. The `bug.js` file shows a function that abruptly returns `null` if either input parameter is null, potentially neglecting additional logic for null value processing.  The solution in `bugSolution.js` showcases a more robust approach using optional chaining and nullish coalescing for graceful null handling.

## Bug
The initial code lacks flexibility in managing null values. It simply returns null without attempting other operations that might be suitable for null inputs, such as using a default value or alternative calculations.

## Solution
The improved code addresses this by using optional chaining (`?.`) to safely access properties that might be null, and nullish coalescing (`??`) to provide default values if a value is null or undefined. This makes the function more robust and less likely to produce unexpected null return values.