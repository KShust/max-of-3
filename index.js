const num1 = prompt('Enter the first number:')
const num2 = prompt('Enter the second number:')
const num3 = prompt('Enter the third number:')

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
    return num1;
    } else if (num2 > num1 && num2 > num3) {
    return num2;
    } else {
    return num3;
    }
}

console.log(maxOfThree(num1, num2, num3))