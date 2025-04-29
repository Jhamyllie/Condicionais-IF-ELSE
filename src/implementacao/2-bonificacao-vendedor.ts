function calcularBonificacao(valor: number, quantidade: number): string {
    let total: number = valor*quantidade;

    if (total > 100) {
        return String("Valor total: R$ " + total.toFixed(2) + " Bonificação de 10% para o vendedor!");
    }else{
        return String("Valor total: R$ " + total.toFixed(2));
    }

}

    console.log(calcularBonificacao(20,6))
    console.log(calcularBonificacao(15,4))

