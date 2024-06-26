//variaveis de tudo que vai ser usado no codigo, ligadas as tags html
const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

// função para verificar quando a lampada está quebrada
function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
    //o indexOff faz uma varredura em uma string procurando outra string
    //indexOff > -1 retorna true
    //indexOff = -1 retorna false
}

function lampOn (){
    if(!isLampBroken()){ //!isLampBroken() = muda o valor lógico = quando a lampada nn estiver quebrada 
        lamp.src = './img/ligada.jpg'; //a imagem da lampada será mudada para a lampada liga
    }
}

function lampOff (){
    if(!isLampBroken()){
        lamp.src = './img/desligada.jpg'; //a imagem da lampada será mudada para desligada
    }
}

function lampBreak (){
    lamp.src = './img/quebrada.jpg'; //a imagem da lampada será mudada para quebrada
}

function lampOnOff(){
    if(turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar'
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

/*
turnOn.addEventListener('click', lampOn); = onclick
turnOff.addEventListener('click', lampOff); = onclick
lamp.addEventListener('mouseover', lampOn) = onmouseover
lamp.addEventListener('mouseout', lampOff) = onmouseout
lamp.addEventListener('dblclick', lampBreak) = ondblclick
*/
