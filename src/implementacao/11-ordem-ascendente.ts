function ordenarAscendente(numeroA: number, numeroB: number, numeroC:number): string {
    let menorNumero: number;
    let segundoNumero: number;
    let maiorNumero: number;

    if(numeroA < numeroB && numeroA < numeroC){
        menorNumero = numeroA;
        if (numeroB < numeroC) {
            segundoNumero = numeroB;
            maiorNumero = numeroC;
        } else {
            segundoNumero = numeroC;
            maiorNumero = numeroB;
        }
    }else if(numeroB < numeroA && numeroB< numeroC){
        menorNumero = numeroB;
        if (numeroA < numeroC) {
            segundoNumero = numeroA;
            maiorNumero = numeroC
        } else {
            segundoNumero = numeroC;
            maiorNumero = numeroA;
        }
    }else{
        menorNumero = numeroC;
        if (numeroA < numeroB) {
            segundoNumero = numeroA;
            maiorNumero = numeroB
        } else {
            segundoNumero = numeroB;
            maiorNumero = numeroA;
        }
    }

    return `${menorNumero}, ${segundoNumero}, ${maiorNumero}`
}

console.log(ordenarAscendente(3,1,2));
console.log(ordenarAscendente(5,8,2));
console.log(ordenarAscendente(-1,0,-5));
console.log(ordenarAscendente(7,7,7));
console.log(ordenarAscendente(50,25,75));

// Quando a entrada for "3", "1" e "2", a saída deve ser "1, 2, 3".
// Quando a entrada for "5", "8" e "2", a saída deve ser "2, 5, 8".
// Quando a entrada for "-1", "0" e "-5", a saída deve ser "-5, -1, 0".
// Quando a entrada for "7", "7" e "7", a saída deve ser "7, 7, 7".
// Quando a entrada for "50", "25" e "75", a saída deve ser "25, 50, 75".