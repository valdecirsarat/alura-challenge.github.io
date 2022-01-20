/*A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/
var textoCripto = [] ;
function criptografar(texto){
    textoCripto;    
    for(i = 0; i < texto.length; i++){
        if(texto[i] == "e"){
            textoCripto.push("enter");
        }    
        else if(texto[i] == "i"){
            textoCripto.push("imes");
        }    
        else if(texto[i] == "a"){
            textoCripto.push("ai");
        }        
        else if(texto[i] == "o"){
            textoCripto.push("ober");
        }
        else if(texto[i] == "u"){        
            textoCripto.push("ufat");
        }
        else{
            textoCripto.push(texto[i]);
        }
    }
    
    mensagem.textContent = textoCripto.join("");
    textoCripto = [];

    
}


