// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
// console.log('output', output);

input.addEventListener('input', changeInput);
function changeInput(event) {
    input.value === ''
        ? (output.textContent = 'незнакомец')
        : (output.textContent = event.currentTarget.value);
}

// let input = document.getElementById("name-input");
// let nameOutput = document.getElementById("name-output");

// input.oninput = function () {
//     if (input.value === '') {
//        nameOutput.innerHTML = 'незнакомец';
//     } else{
//     nameOutput.innerHTML = input.value;
//     }
// }