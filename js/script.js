


function calculo() {


var alcool = parseFloat(document.getElementById("preco_alcool").value);
var gasolina = parseFloat(document.getElementById("preco_gasolina").value);
var calc_result = alcool/gasolina;
var x ;



        if (calc_result <= 0.7){
            x= "Resposta: Será mais economico abastacer com Álcool";
        }
        else {
            x= "Resposta: Será mais economico abastacer com Gasolina";
        }
            document.getElementById("resultado").innerHTML=x;
        
}


