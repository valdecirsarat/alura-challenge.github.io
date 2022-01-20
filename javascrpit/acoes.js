
var textoEntrada = document.querySelector(".caixa-texto");
var btnCripto = document.querySelector("#btn-cripto");
var mensagem = document.querySelector("#msg");

//Ação fechar modal

var modal = document.querySelector("#fechar");
modal.addEventListener("click", function(){
    document.querySelector("#aviso").style.display = 'none';
    document.querySelector("#section").style.opacity = 1.0;
})

//Ação Criptografar
btnCripto.addEventListener("click",function(event){
    var texto = textoEntrada.value; 
    document.querySelector("#texto-label").textContent = "Mensagem Criptografada:"   
    criptografar(texto);   
    event.preventDefault();
});

//Ação copiar texto
var copiar = document.querySelector("#btn-copiar");
copiar.addEventListener("click", function(){
   var copia =  mensagem.textContent;
   // copiar texto   
   navigator.clipboard.writeText(copia); 

})

//Açao descriptografar
var btnDesCripto = document.querySelector("#btn-descripto");
btnDesCripto.addEventListener("click", function(event){
    var texto = textoEntrada.value;
    descriptografar(texto);
    document.querySelector("#texto-label").textContent = "Mensagem Descriptografada:"    
    event.preventDefault();
})

