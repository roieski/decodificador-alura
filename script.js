const quadroTexto = document.querySelector(".quadro-texto");
const quadroResposta = document.querySelector(".quadro-resposta");


function btncriptografar() {
	const textoEncriptado = encriptar(quadroTexto.value);
	quadroResposta.value = textoEncriptado;
}

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"



function encriptar(stringEncriptada) {
		let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
		stringEncriptada = stringEncriptada.toLowerCase();

	 for (let i=0; i < matrizCodigo.length; i++) {
		if (stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return stringEncriptada;
}

function btndescriptografar() {
	const textoDesencriptado = desencriptar(quadroTexto.value);
	quadroResposta.value = textoDesencriptado;

}

function desencriptar(stringDesencriptada) {
		let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u", "ufat"]];
		stringDesencriptada = stringDesencriptada.toLowerCase();

	 for (let i=0; i < matrizCodigo.length; i++) {
		if (stringDesencriptada.includes(matrizCodigo[i][1])){
			stringDesencriptada = stringDesencriptada .replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}
	}
		return stringDesencriptada;
}

 function btntextocopiado() {
    const copiartexto = document.querySelector(".quadroResposta");
    const copiado = quadroResposta.value;
    navigator.clipboard.writeText(copiado);
    quadroResposta.value =""
 }