function calcularRaizOuQuadrado(numero: number): number {
    let resultado: number;
    let i: number = 0;

    if (numero >= 0) {
        while (i * i <= numero) {
            i++;
        }
        resultado = i - 1;
    } else {
        resultado = numero * numero;
    }
    return resultado;
}

console.log(calcularRaizOuQuadrado(16));
console.log(calcularRaizOuQuadrado(-3));
console.log(calcularRaizOuQuadrado(0));
console.log(calcularRaizOuQuadrado(11));

/*
Se o número fornecido for 16, o algoritmo deve imprimir a raiz quadrada de 16, que é 4.
Se o número fornecido for -3, o algoritmo deve imprimir o quadrado de -3, que é 9.
Se o número fornecido for 0, o algoritmo deve imprimir a raiz quadrada de 0, que é 0.
*/