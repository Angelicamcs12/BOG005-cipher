const cipher = {
  // funcion cifrar
  encode: function (desplazamiento, texto){

    if (!desplazamiento || !texto){
      throw new TypeError("Esto es un error");
    } 

    console.log(texto)
    let result = "";
    for (let i = 0; i < texto.length; i++){
      let codeAscci = texto.charCodeAt(i);
      console.log(codeAscci)
      let msjCifrado = ((codeAscci - 65 + desplazamiento) %26 ) + 65;
      result += String.fromCharCode(msjCifrado);
    }
    console.log(result)
    return result;
  },

  //funcion descifrar
  decode: function (desplazamiento, texto){
    if (!desplazamiento || !texto){
      throw new TypeError("Esto es un error");
    } 

    let resultDecode = "";
    for (let i = 0; i < texto.length; i++){
      let codeAscci = texto[i].charCodeAt(0);
      let msjDescifrado = ((codeAscci + 65 - desplazamiento) % 26 ) + 65;
      resultDecode += String.fromCharCode(msjDescifrado);
    }
    return resultDecode;
  }
}
export default cipher;
