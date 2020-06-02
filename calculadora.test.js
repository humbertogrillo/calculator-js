const {calculate} = require('./calculadora');
/* Refatorei os testes para simplificar.
Abaixo deixo o código criado durante o desafio */

function sucesso(fn, input, expected){
    console.log( fn(input) === expected ?
        `PASSOU: ${input}` :
        `FALHOU: ${input} falhou. Esperando ${expected}, retornou ${fn(input)}`);
}

function testeCalculate(input,expected){
    sucesso(calculate,input,expected);
}

testeCalculate('1+2',3);
testeCalculate('2-1',1);
testeCalculate('1+3-1',3);
testeCalculate('1.5+2',3.5);
testeCalculate('2*2',4);
// A partir deste ponto, testes que eu criei para testar multiplicação
testeCalculate('2+3*3',11);
testeCalculate('3*3-1*2',7);
testeCalculate('15*0.2',3);
// Testando divisão
testeCalculate('12/4',3);

/* A partir daqui o código original gerado durante a entrevista
function sucesso(input, actual, expected){
    return actual === expected ?
        `${input} passou` :
        `${input} falhou. Esperando ${expected}, retornou ${actual}`;
}

function testOnePlusTwo(){
    const expected = 3;
    const input = '1+2';
    const actual = calculate(input);
    console.log(sucesso(input,actual,expected));
}

function testTwoMinusOne(){
    console.log(sucesso('2-1',calculate('2-1'),1))
}

function testOnePlusThreeMinusOne(){
    console.log(sucesso('1+3-1',calculate('1+3-1'),3))
}

function testOneAndAHalfPlusTwo(){
    console.log(sucesso('1.5+2',calculate('1.5+2'),3.5))
}

function testTwoTimesTwo(){
    console.log(sucesso('2*2',calculate('2*2'),4))
}

testOnePlusTwo();
testTwoMinusOne();
testOnePlusThreeMinusOne();
testOneAndAHalfPlusTwo();
testTwoTimesTwo();
*/