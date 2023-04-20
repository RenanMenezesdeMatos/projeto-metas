let textContent = `Você atingirá o seu objetivo, em (inserir variável de data futura), seu objetivo custará (inserir variável de valor total), se for persistente seu objetivo te custará (Inserir variável do valor mensal) ao mês.`


let converDate = function (dataInput){
    dataInput.split('-').reverse().join('/');
    return dataInput
}


let diferencaEmDias = function (data1, data2) {
    const umDia = 24 * 60 * 60 * 1000; // número de milissegundos em um dia
    return Math.round(Math.abs((data2 - data1) / umDia)); // retorna o número de dias
  }

let totalValue = function (dias, valor){
    return dias - valor
}

function subtrairDias(data, dias) {
    // Cria uma nova data com a data original
    // Isso é importante para evitar alterar a data original
    var dataSubtraida = new Date(data);
    
    // Subtrai a quantidade de dias da data usando setDate()
    // A função setDate() atualiza a data com base no número de dias passado
    // Então, neste caso, subtraímos a quantidade de dias da data original
    dataSubtraida.setDate(dataSubtraida.getDate() - dias);
    
    // Retorna a nova data subtraída
    return dataSubtraida;
  }
  


export {textContent}

