function verificarParOuImpar(numero: number): string{
    if(numero % 2 == 0){
        return "PAR";
    } else{
        return "IMPAR";
    }
}

console.log(verificarParOuImpar(4));
console.log(verificarParOuImpar(7));
console.log(verificarParOuImpar(0));
console.log(verificarParOuImpar(-15));
console.log(verificarParOuImpar(-10));

/*
Se o número fornecido for 4, o algoritmo deve imprimir "PAR".
Se o número fornecido for 7, o algoritmo deve imprimir "ÍMPAR".
Se o número fornecido for 0, o algoritmo deve imprimir "PAR", pois 0 é divisível por 2.
*/