function verificarDivisivel(numA: number, numB: number): string{
    if(numA % numB == 0){
        return `${numA} é divisível por ${numB}`
    } else{
       return `${numA} não é divisível por ${numB}`
    }
}

// console.log(verificarDivisivel(9,9));
// console.log(verificarDivisivel(910,2));
// console.log(verificarDivisivel(10,2));
// console.log(verificarDivisivel(10,3));
// console.log(verificarDivisivel(10,5));
// console.log(verificarDivisivel(-9,9));

/*
Se A for divisível por B, o algoritmo deve imprimir "A é divisível por B".
Se A não for divisível por B, o algoritmo deve imprimir "A não é divisível por B".
Se A for 10 e B for 2, o algoritmo deve imprimir "10 é divisível por 2".
Se A for 10 e B for 3, o algoritmo deve imprimir "10 não é divisível por 3".
Se A for 20 e B for 5, o algoritmo deve imprimir "20 é divisível por 5".*/