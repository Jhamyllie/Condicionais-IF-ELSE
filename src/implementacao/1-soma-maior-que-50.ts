function somaMaiorQueCinquenta(primeiroValor: number, segundoValor: number): string {
    let soma: number = primeiroValor + segundoValor; 
    if (soma > 50) {
        return String(soma)
    } else {
        return "null"
    }
}

console.log(somaMaiorQueCinquenta(5,10));
console.log(somaMaiorQueCinquenta(25,30));
console.log(somaMaiorQueCinquenta(20,25));
