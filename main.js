function on (){

    document.getElementById ("lamp").src = "ligada.jpg";
}

function off (){

    document.getElementById ("lamp").src = "desligada.jpg";
}


function quebrada (){

    document.getElementById ("lamp").src = "quebrada.jpg";
}

function blink (){
    
    var intervalo = 0;
    var contador = 0;
    while (contador <10){
        intervalo += 300;
        setTimeout ("document.getElementById ('lamp').src ='ligada.jpg';",intervalo);
        intervalo += 300;
        setTimeout ("document.getElementById ('lamp').src ='desligada.jpg';",intervalo);
        contador ++;

    }
}



/* while  ou do while sao duas estrutura de repetiçoes infinitas ou seja o laço e executado quando a condiçao for 
verdadeira , a  estrutura  do while ela  sempre  executa uma vez oque esta dentro do laço indepedente  da condiçao
ou seja  neste  caso ele vai escrever helo e vai verificar a condiçao como a condiçao e falsa ele nao faz o loop ele para por ai





*/