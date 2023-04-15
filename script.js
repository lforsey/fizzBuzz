const btn = document.querySelector("#inputBtn");
const input = document.querySelector('#userInput');
const form = document.querySelector('#inputForm');

const fizzBuzz = (num) => {
    let arr = [];
    while (num > 0) {
        if (num % 3 === 0 && num % 5 === 0) {
            arr.push('FizzBuzz');
            num --;
        } else if (num % 3 === 0) {
            arr.push('Fizz');
            num --;
        } else if (num % 5 ===0) {
            arr.push('Buzz');
            num --;
        } else {
            arr.push(num.toString());
            num --;
        }
    }     
    const newDiv = document.createElement('div');
    const answer = document.createTextNode(arr.reverse())
    newDiv.appendChild(answer);
    form.appendChild(newDiv);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputNum = input.value;
    fizzBuzz(inputNum);
});