/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let mostra = document.getElementById("display");
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


//bt1.addEventListener("click",
//    function(){
//        mostra.value = mostra.value + "1";
//    }
//);

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

function digito(button){
    mostra.value += button.value;
}



