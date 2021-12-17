// Print odds 1-20
console.log("Print odd numbers from 1 to 20");
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Decreasing multiples of 3
console.log("Printing decreasing multiples of 3 starting from 100");
for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

// Print the sequence
console.log("Printing the specified sequence");
for (var i = 4.0; i >= -3.5; i -= 1.5) {
    console.log(i);
}

// Sigma
console.log("Printing the sum of ingeters from 1 to 100");
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// Factorial
console.log("Printing the factorial of 12");
var product = 1;
for (var i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);