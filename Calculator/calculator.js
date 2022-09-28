let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');
const onClickNumber = (event) => {
    if (!operator) {
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }

    if (!numTwo) {
        $result.value = '';
    }
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
};
   
 // 고차함수 (high order function)

document.querySelector('#num-0').addEventListener('click', (onClickNumber('0')));
document.querySelector('#num-1').addEventListener('click', (onClickNumber('1')));
document.querySelector('#num-2').addEventListener('click', (onClickNumber('2')));
document.querySelector('#num-3').addEventListener('click', (onClickNumber('3')));
document.querySelector('#num-4').addEventListener('click', (onClickNumber('4')));
document.querySelector('#num-5').addEventListener('click', (onClickNumber('5')));
document.querySelector('#num-6').addEventListener('click', (onClickNumber('6')));
document.querySelector('#num-7').addEventListener('click', (onClickNumber('7')));
document.querySelector('#num-8').addEventListener('click', (onClickNumber('8')));
document.querySelector('#num-9').addEventListener('click', (onClickNumber('9')));

const onClickOperator = (op) => () => {
    if (numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert('숫자를 먼저 입력하세요.');
    }
}
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'))
document.querySelector('#divide').addEventListener('click', onClickOperator('/'))
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'))
document.querySelector('#calculate').addEventListener('click', () => {});
document.querySelector('#clear').addEventListener('click', () => {});


