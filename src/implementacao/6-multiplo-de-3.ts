function verificarMultiploDe3(num: number): string {
    if( num % 3 === 0){
        return "É multiplo de 3";
    }else{
        return "Não é multiplo de 3";
    }
}

console.log(verificarMultiploDe3(9));
console.log(verificarMultiploDe3(10));
console.log(verificarMultiploDe3(0))

/*Se o número fornecido for 9, o algoritmo deve imprimir "é múltiplo de 3".
Se o número fornecido for 10, o algoritmo deve imprimir "não é múltiplo de 3".
Se o número fornecido for 0, o algoritmo deve imprimir "é múltiplo de 3", pois 0 é divisível por 3.*/