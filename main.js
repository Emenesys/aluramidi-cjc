function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
};
//busca os elementos com a classe "tecla"
const listaDeTeclas = document.querySelectorAll('.tecla');

//laço de repeticação
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//Template String
    
    tecla.onclick = function() {
        tocaSom(idAudio);
        }

      
}


