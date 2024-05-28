export function deepEqual(a: any, b: any): boolean {
  // Check if both are the same reference
  if (a === b) return true;

  // Check if both are arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // Check if both are objects and not null
  if (a && b && typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
  }

  // If none of the above conditions met, return false
  return false;
}

// Usage Example:
// const array1 = [{ a: [2, { c: 3 }] }, [1, 2, 3]];
// const array2 = [{ a: [2, { c: 3 }] }, [1, 2, 3]];

// console.log(deepEqual(array1, array2));  //
// Output: true
