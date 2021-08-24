function ligarDesliga(){

    let imagem = document.getElementById('lampadas').src;
    let imagem_ligado = './img/ligada-removebg-preview.png';
    let imagem_desligado = './img/apagada-removebg-preview.png';
    
    if(imagem == imagem_ligado){
    	document.getElementById('ligar').src = imagem_desligado;
    }else{
    	document.getElementById('lampadas').src = imagem_ligado;
    }
}
function Desliga(){

    let imagem2 = document.getElementById('lampadas').src;
    let imagem_ligado2 = './img/ligada-removebg-preview.png';
    let imagem_desligado2 = './img/apagada-removebg-preview.png';
    
    if(imagem2 == imagem_desligado2){
    	document.getElementById('desligar').src = imagem_ligado2;
    }else{
    	document.getElementById('lampadas').src = imagem_desligado2;
    }
}

document.getElementById("ligar").addEventListener("click", ligarDesliga);
document.getElementById("desligar").addEventListener("click", Desliga);