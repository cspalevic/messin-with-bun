const fibonacci = (input: number) => {
    if([0,1,2].includes(input)) return 1;
    return fibonacci(input-1) + fibonacci(input-2);
}

const result = fibonacci(1);
console.log(result);