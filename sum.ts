function add(a: string, b: number): number {
    // This will fail because we're trying to add a string and number without proper conversion
    return a + b;
}

// Missing type annotation for parameter
function multiply(x, y) {
    return x * y;
}

// Variable used before declaration
console.log(undefinedVariable);
let undefinedVariable = "oops";

export { add, multiply };