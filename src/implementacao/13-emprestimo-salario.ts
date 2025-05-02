function verificarEmprestimo(salarioBruto: number, valorPrestacao: number): boolean {
    if (valorPrestacao > salarioBruto*30/100){
        return false;
    }else{
        return true;
    }
  
}

console.log(verificarEmprestimo(3000,900));
console.log(verificarEmprestimo(4000,1500));
console.log(verificarEmprestimo(5000,1200))

/*Quando a entrada for "3000" (salário bruto) e "900" (prestação), a saída deve ser true.
Quando a entrada for "4000" (salário bruto) e "1500" (prestação), a saída deve ser false.
Quando a entrada for "5000" (salário bruto) e "1200" (prestação), a saída deve ser true.*/