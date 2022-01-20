
// As posições de cavesCrpto e chaves possuem seus idex correspodentes.

var  chavesCrpto = [ "ai", "enter", "imes", "ober", "ufat"];
var chaves = ["a" , "e", "i", "o", "u"]
var textoDesCripto = "";
function descriptografar(texto){
    
    for( var i = 0 ; i < texto.length; i++){
        for(var j = 0; j < chavesCrpto.length; j++){
           textoDesCripto = texto.replace(chavesCrpto[j], chaves[j]);
           texto = textoDesCripto;
        }
        j = 0;
    }  
    mensagem.textContent = textoDesCripto;
}

