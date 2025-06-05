function add(a: string, b: number): number {
    // Convert string to number using parseInt before addition
    return parseInt(a) + b;
}

// Missing type annotation for parameter
function multiply(x, y) {
    return x * y;
}

// Variable declaration before usage
const undefinedVariable = "oops";
console.log(undefinedVariable);

export { add, multiply };