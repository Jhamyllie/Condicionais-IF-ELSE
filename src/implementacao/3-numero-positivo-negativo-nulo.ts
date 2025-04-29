function verificarNumero(numero: number): string {
    if (numero > 0) {
        return "POSITIVO";
    } else if(numero < 0) {
        return "NEGATIVO"
    }else{
        return "NULO";
    }

}

// console.log(verificarNumero(5));
// console.log(verificarNumero(-3));
// console.log(verificarNumero(0));
