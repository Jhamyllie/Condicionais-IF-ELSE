function somaMaiorQueCinquenta(num1: number, num2: number): string {
    let soma: number = num1 +num2; 
    if (soma > 50) {
        return String(soma)
    } else {
        return "null"
    }
}

// console.log(somaMaiorQueCinquenta(5,10));
// console.log(somaMaiorQueCinquenta(25,30));
// console.log(somaMaiorQueCinquenta(20,25));
