function verificarDivisivel(numeroA: number, numeroB: number): string{
    if(numeroA % numeroB == 0){
        return `${numeroA} é divisível por ${numeroB}`
    } else{
       return `${numeroA} não é divisível por ${numeroB}`
    }
}

console.log(verificarDivisivel(9,9));
console.log(verificarDivisivel(910,2));
console.log(verificarDivisivel(10,2));
console.log(verificarDivisivel(10,3));
console.log(verificarDivisivel(10,5));
console.log(verificarDivisivel(-9,9));

/*
Se A for divisível por B, o algoritmo deve imprimir "A é divisível por B".
Se A não for divisível por B, o algoritmo deve imprimir "A não é divisível por B".
Se A for 10 e B for 2, o algoritmo deve imprimir "10 é divisível por 2".
Se A for 10 e B for 3, o algoritmo deve imprimir "10 não é divisível por 3".
Se A for 20 e B for 5, o algoritmo deve imprimir "20 é divisível por 5".*/