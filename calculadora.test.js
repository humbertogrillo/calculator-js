const {calculate} = require('./calculadora');
/* Refatorei os testes para simplificar.
    Para ver o código anterior, verificar histºorico de mudanças */

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