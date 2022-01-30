// ------------- Variables -------------
const texto = document.querySelector("#frase");
const resultado = document.querySelector("#resultado");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnBorrar = document.querySelector("#borrar");
const mensajeCopiado = document.querySelector("#mesaje-copiado");
let textoEncriptado = "";
let textoDesencriptado = "";
let textoLeido = "";

// ------------- Event Listeners -------------
cargarListeners();
function cargarListeners(){
    //Lee el texto ingresado por el ususario
    texto.addEventListener("blur", leerTexto);

    //Coloca el mesaje encriptado en el input resultado
    btnEncriptar.addEventListener("click", encriptarMensaje);

    //Coloca el mesaje desencripado en el input resultado
    btnDesencriptar.addEventListener("click", desencriptarMesaje);

    //Coloca en el porta papeles la frase a copiar
    btnCopiar.addEventListener("click", copiarTexto);

    //Borrar los elementos en los input Text
    btnBorrar.addEventListener("click", borrarTexto);


}


//------------- Funciones -------------
function leerTexto(e){ //Lee el texto introducido
    textoLeido = e.target.value.toLowerCase();
}

function encriptarMensaje(e){
    
    if(textoLeido.length > 0){
        const arr = [];
    
        //Pasa la cadena a un arreglo
        for(let i = 0; i < textoLeido.length; i++){
            arr[i] = textoLeido.charAt(i);
        }
        //Encripta el mesaje
        for(let i = 0; i < textoLeido.length; i++){
            
            if(arr[i] === "a"){
                arr[i] = "ai";
            }
            if(arr[i] === "e"){
                arr[i] = "enter"
            }
            if(arr[i] ===  "i"){
                arr[i] = "imes";
            }
            if(arr[i] === "o"){
                arr[i] = "ober";
            }
            if(arr[i] === "u"){
                arr[i] = "ufat";
            }
            else{
                arr[i] === arr[i];
            }
        }
        
        textoEncriptado = arr.join("");
    } else {
        console.log("No hay frase");
    }
    resultado.value = textoEncriptado;
    textoEncriptado = "";
    textoLeido = "";
}

//Funcion para desencriptar el mensaje
function desencriptarMesaje(e){
    if(textoLeido.length > 0){
        textoDesencriptado = textoLeido.replaceAll("ai", "a");
        textoDesencriptado = textoDesencriptado.replaceAll("enter","e");
        textoDesencriptado = textoDesencriptado.replaceAll("imes","i");
        textoDesencriptado = textoDesencriptado.replaceAll("ober","o");
        textoDesencriptado = textoDesencriptado.replaceAll("ufat","u");

        resultado.value = textoDesencriptado;
    }
    textoDesencriptado = "";
}

//Funcion para copiar el texto del input resultado
function copiarTexto(e){
    if(e){
        let textoCopiado = document.getElementById("resultado");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999);
        document.execCommand("copy");
        texto.value = "";
        
        mensajeCopiado.classList.remove("escondido");
        mensajeCopiado.classList.add("mostrarMensaje");
        
        setTimeout( () => {
            mensajeCopiado.classList.remove("mostrarMensaje");
            mensajeCopiado.classList.add("escondido");
            resultado.value = "";

        },3000);
    } 
}

// Funcion para borrar los cuadro de texto.
function borrarTexto() {
    texto.value = "";
    resultado.value = "";
}



