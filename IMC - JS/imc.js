//ctrl + d para selecionar o mesmo elemento
//essa constante armazena o elemento, nn o conteudo do elemento
const calcular = document.getElementById('calcular'); //a variavel pega todo o elemento, não apenas o conteudo dentro desse elemento

function imc(){
    //É recomendado colocar as variaveis que vão ser usadas dentro de uma determinada estrutura dentro dela para evotar variaveis globais
    const nome = document.getElementById('nome').value; //value é valido apenas pra input do tipo texto
    const altura = document.getElementById('altura').value; 
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado'); //o valor vai ser inserido dentro do elemento resultado

    //validar se o campo está preenchido
    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        //aproximar 1 casa decimal

        let classificacao = '' //o valor vai ser mudado 

        /*o switch compara valores de igualdade, ou seja, será comparado se o valor dentro do switch sera igual ao valor dentro do case*/
        switch (true){ 
            case (valorIMC< 18.5): //valor booleano, que emitirá um resultado que sera comparado ao valor true dentro do switch
             classificacao = 'abaixo do peso.';
                break;

            case (valorIMC < 25):
             classificacao = 'com peso ideal. Parabéns!';
                break;

            case (valorIMC < 30):
             classificacao = 'levemente acima do peso.';
                break;

            case (valorIMC < 35):
             classificacao = 'com obesidade grau I.';
                break;

            case (valorIMC < 40):
             classificacao = 'com obesidade grau II.';
                break;

            default:
             classificacao = 'com obesidade grau III. Cuidado!!';
            }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!' //dentro da div, eu quero que insira x conteudo de texto
    }

}

calcular.addEventListener('click', imc); //Quando alguém clicar sobre esse elemento, acione a função imc