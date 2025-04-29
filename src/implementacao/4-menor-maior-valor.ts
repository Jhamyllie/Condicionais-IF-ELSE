function determinarMenorMaior(numero1: number, numero2: number): string {
    if(numero1 > numero2) {
        return `${numero1} maior valor, ${numero2} menor valor`;
    } else {
        return `${numero2} maior valor, ${numero1} menor valor`;
    };
}

console.log(determinarMenorMaior(10,5));
console.log(determinarMenorMaior(2,-3));
console.log(determinarMenorMaior(7,7));
console.log(determinarMenorMaior(100,0));
console.log(determinarMenorMaior(-5,-10));

/*Quando a entrada for 5 e 10, a saída deve ser 10 (maior valor) e 5 (menor valor).
Quando a entrada for -3 e 2, a saída deve ser 2 (maior valor) e -3 (menor valor). 
Quando a entrada for 7 e 7, a saída deve ser 7 (maior valor) e 7 (menor valor).
Quando a entrada for 0 e 100, a saída deve ser 100 (maior valor) e 0 (menor valor).
Quando a entrada for -5 e -10, a saída deve ser -5 (maior valor) e -10 (menor valor).*/