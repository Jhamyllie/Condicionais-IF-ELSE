import { convertCompilerOptionsFromJson } from "typescript";

function determinarMaiorMenorDeQuatro(numeroA: number, numeroB: number, numeroC: number, numeroD:number):[number, number] {
    let maior = numeroA;
    let menor = numeroA;

    //comparação maior

    if (numeroB > maior) {
        maior = numeroB;
    }
    if (numeroC > maior) {
        maior = numeroC;
    }
    if (numeroD > maior) {
        maior = numeroD;
    }

    //comparação menor

    if (numeroB < menor) {
        menor = numeroB;
    }
    if (numeroC < menor) {
        menor = numeroC;
    }
    if (numeroD < menor) {
        menor = numeroD;
    }

    return [maior, menor];
    
}

console.log(determinarMaiorMenorDeQuatro (1,2,3,4))
console.log(determinarMaiorMenorDeQuatro (10,15,5,8))
console.log(determinarMaiorMenorDeQuatro (-1,0,-10,20))
console.log(determinarMaiorMenorDeQuatro (7,7,7,7))
console.log(determinarMaiorMenorDeQuatro (100,25,50,75))

/*Quando a entrada for "1", "2", "3" e "4", a saída deve ser "4" (maior valor) e "1" (menor valor).
Quando a entrada for "10", "15", "5" e "8", a saída deve ser "15" (maior valor) e "5" (menor valor).
Quando a entrada for "-1", "0", "-10" e "20", a saída deve ser "20" (maior valor) e "-10" (menor valor).
Quando a entrada for "7", "7", "7" e "7", a saída deve ser "7" (maior valor) e "7" (menor valor).
Quando a entrada for "100", "25", "50" e "75", a saída deve ser "100" (maior valor) e "25" (menor valor).*/
