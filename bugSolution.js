function foo(a, b) {
  // Use optional chaining and nullish coalescing for robust null handling
  return (a ?? 0) + (b ?? 0); 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 5)); // Output: 5