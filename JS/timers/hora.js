function mostrarHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false 
    });
}

function funcaoDoIntervalo(){
    console.log(mostrarHora());
}

setInterval(funcaoDoIntervalo, 1000);
