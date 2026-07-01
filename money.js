function converter(){
    let opcao,valor,total;
    opcao=parseInt(document.getElementById("txtopcao").value)
    valor=parseFloat(document.getElementById("real").value)
    switch(opcao){
        case 1:
            total=valor/5.19;
            resultado.innerHTML="Valor em Dólar: US$"+total.toFixed(2);
            break
        case 2:
            total=valor/5.90;
            resultado.innerHTML="Valor em Euro: €"+total.toFixed(2);
            break
            default:
            alert("Opção inválida")
    }
}