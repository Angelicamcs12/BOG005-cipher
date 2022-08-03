const cipher = {
  // funcion cifrar 
  encode: function (texto, desplazamiento){
    if (desplazamiento === undefined && texto === undefined){
      throw new TypeError;
    } else if (desplazamiento === 0 && texto === 0){
      throw new TypeError;
    } else if (desplazamiento ===  null || texto === []){
      throw new TypeError;
    } else if (desplazamiento == 0 && texto == 0){
      throw new TypeError;
    }

    let result = "";
    for (let i = 0; i < texto.length; i++){
      let codeAscii = texto[i].charCodeAt(0);
      let msjCifrado = ((codeAscii - 65 + desplazamiento) % 26 ) + 65;
      result += String.fromCharCode (msjCifrado);
    }
    return result;


  },
  decode: function (texto,desplazamiento){
    if (desplazamiento === undefined && texto === undefined){
      throw new TypeError;
    } else if (desplazamiento === 0 && texto === 0){
      throw new TypeError;
    } else if (desplazamiento ===  null || texto === []){
      throw new TypeError;
    } else if (desplazamiento == 0 && texto == 0){
      throw new TypeError;
    }

    let resultDecode = "";
    for (let i = 0; i < texto.length; i++){
      let codeAscii = texto[i].charCodeAt(0);
      let msjDescifrado = ((codeAscii + 65 - desplazamiento) % 26 ) + 65;
      resultDecode += String.fromCharCode (msjDescifrado);
    }
    return resultDecode;

}
};

export default cipher;
