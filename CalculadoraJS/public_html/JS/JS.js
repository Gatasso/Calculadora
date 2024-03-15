/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// declaração de variáveis
let mostra = document.getElementById("display");
let operador = document.getElementById("operador");
let auxiliar = document.getElementById("auxiliar");
let bt1 = document.getElementById("bt1");
let bt2 = document.getElementById("bt2");
let bt3 = document.getElementById("bt3");
let bt4 = document.getElementById("bt4");
let bt5 = document.getElementById("bt5");
let bt6 = document.getElementById("bt6");
let bt7 = document.getElementById("bt7");
let bt8 = document.getElementById("bt8");
let bt9 = document.getElementById("bt9");
let bt0 = document.getElementById("bt0");
let btAdd = document.getElementById("btAdd");
let btSub = document.getElementById("btSub");
let btMult = document.getElementById("btMult");
let btDiv = document.getElementById("btDiv");
let btEqual = document.getElementById("btEqual");
let btColon = document.getElementById("btColon");

//eventos para os digitos
bt1.addEventListener("click",function(){digito(this);});
bt2.addEventListener("click",function(){digito(this);});
bt3.addEventListener("click",function(){digito(this);});
bt4.addEventListener("click",function(){digito(this);});
bt5.addEventListener("click",function(){digito(this);});
bt6.addEventListener("click",function(){digito(this);});
bt7.addEventListener("click",function(){digito(this);});
bt8.addEventListener("click",function(){digito(this);});
bt9.addEventListener("click",function(){digito(this);});
//bt0.addEventListener("click",function(){digito(this);});
bt0.onclick = function(){digito(this);};

//eventos para as operações matematicas
btAdd.addEventListener("click",function(){operacao(this);});
btSub.addEventListener("click",function(){operacao(this);});
btMult.addEventListener("click",function(){operacao(this);});
btDiv.addEventListener("click",function(){operacao(this);});
//evento para efetuar as operações
btEqual.addEventListener("click", resolucao);
//evento para adicionar ponto aos numeros
btColon.addEventListener("click", function(){digito(this);});

//funções
function digito(botao){
    if(mostra.value.indexOf(".") != -1){
        mostra.value += botao.value;
    } else{
        mostra.value = parseFloat(mostra.value) + botao.value;
    }
}
function operacao(botao){
    operador.value = botao.value;
    auxiliar.value = mostra.value;
    mostra.value = 0;
}
function resolucao(){
    switch(operador.value){
        case "+":
            mostra.value = parseFloat(auxiliar.value) + parseFloat(mostra.value);
            break;
        case "-":
            mostra.value = auxiliar.value - mostra.value;
            break;
        case "x":
            mostra.value = auxiliar.value * mostra.value;
            break;
        case "÷":
            mostra.value = auxiliar.value / mostra.value;
            break;
        default:       
    }
    auxiliar.value = "";
    operador.value = "";
}

