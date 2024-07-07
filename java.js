
function printTable(n, i = 1) {
    if (i === 11) return;
    console.log(n + " * " + i + " = " + n * i);
    i++;
    printTable(n, i);
}

let n = 1;
printTable(n);



var sum = 0;
var times = 5;
for (i = 0; i < times; i++) {
    sum += parseInt(prompt("enter Any Value"));
}
console.log(sum);
document.write(sum);




var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;

for (i = 0; i <= largest; i++) {
    if (array > largest) {
        var largest = array[i];
    }
}
console.log(largest);



function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

console.log(reverseString("khan"));

console.log(reverseString("shabab"));




var input = prompt("Enter the number to get factorial of: ");
var result = input;
for (var i = 1; i < input; i++) {
    result = i * result;
}
document.write(result);

