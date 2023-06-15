function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}
console.log(removeDuplicates([1, 0, 1, 0])); // Output: [1, 0]
console.log(removeDuplicates(["New", "York", "City"])); // Output: ["New", "York", "City"]
console.log(removeDuplicates(["Hassan", "Aisha", "Aisha"])); // Output: ["Hassan", "Aisha"]
