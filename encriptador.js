var botonEncriptar = document.querySelector(".boton_encriptador");
var botonDesenncriptar = document.querySelector(".boton_desencriptador");
var munheco = document.querySelector(".contenedor_munheco");
var texto1 = document.querySelector(".contenedor_h3");
var parrafo = document.querySelector(".contenedor_parrafo");
var textoRecibido = document.querySelector(".textoRecibido")
var botonCopiar = document.querySelector(".boton_copiar");



botonDesenncriptar.onclick = desencriptar;
botonEncriptar.onclick = encriptar;
botonCopiar.onclick = copyToClickBoard;

function encriptar(){

    ocultarAdelante();

    textoRecibido.textContent = modificarTexto(recuperarTexto());
}

function desencriptar(){
    ocultarAdelante();
    
    textoRecibido.textContent = regresarTexto(recuperarTexto());
}
function recuperarTexto(){
    var area = document.querySelector(".area");
    return(area.value);}

function ocultarAdelante(){
  
    munheco.classList.add("ocultar");
    texto1.classList.add("ocultar");
    parrafo.classList.add("ocultar"); }


function modificarTexto(mensaje){

    var texto = mensaje; 
    var nuevoTexto ="";
    for(var letra=0; letra<texto.length; letra++){
        if(texto[letra] == "a"){
            nuevoTexto=nuevoTexto + "ai"
        }
        else if (texto[letra]== "e"){
            nuevoTexto= nuevoTexto +  "enter"
        }      
        else if (texto[letra]== "i"){
            nuevoTexto= nuevoTexto +  "imes"
        }    
        else if (texto[letra]== "o"){
            nuevoTexto= nuevoTexto +  "ober"
        } 
        else if (texto[letra]== "u"){
            nuevoTexto= nuevoTexto +  "ufat"
        } 
        
         else{
            nuevoTexto = nuevoTexto + texto[letra]; 
         }   
    }
    return nuevoTexto;

}
function regresarTexto(mensaje){

    var texto = mensaje; 
    var nuevoTexto ="";
    for(var letra=0; letra<texto.length; letra++){
        if(texto[letra] == "a"){
            nuevoTexto=nuevoTexto + "a"
            letra = letra+1; 
        }
        else if (texto[letra]== "e"){
            nuevoTexto= nuevoTexto +  "e"
            letra = letra+4; 

        }      
        else if (texto[letra]== "i"){
            nuevoTexto= nuevoTexto +  "i"
            letra = letra+3; 

        }    
        else if (texto[letra]== "o"){
            nuevoTexto= nuevoTexto +  "o"
            letra = letra+3; 

        } 
        else if (texto[letra]== "u"){
            nuevoTexto= nuevoTexto +  "u"
            letra = letra+3; 

        } 
         else{
            nuevoTexto = nuevoTexto + texto[letra]; 
         }   
    }
    return nuevoTexto;

}
function copyToClickBoard(){
    var content = document.getElementById('copiar').innerHTML;
    navigator.clipboard.writeText(content)
    var area = document.querySelector(".area").value = " "; 

}



