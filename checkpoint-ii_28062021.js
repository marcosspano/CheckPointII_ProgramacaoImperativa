let menu = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8 
}

let iniciar = (opcoes, tempo = 0) => {

    let resultado, temp;

    for (var param in menu) {

       if (param == opcoes) {
           resultado = param;
           temp = menu[param];
       }
        
    }

    switch (resultado) {
            
        case 'pipoca':

                if (tempo >= temp*3) {
                    console.log('Kabumm');
                } else if (tempo >= temp*2) {
                    console.log('A comida queimou');
                } else if (tempo < temp) {
                    console.log('Tempo Insuficiente');
                } else {
                    console.log('Prato pronto, bom apetite!!!');
                }
                break;
            

        case 'macarrao':

            if (tempo >= temp*3) {
                console.log('Kabumm');
            } else if (tempo >= temp*2) {
                console.log('A comida queimou');
            } else if (tempo < temp) {
                console.log('Tempo Insuficiente');
            } else {
                console.log('Prato pronto, bom apetite!!!');
            }
            break;

        case 'carne':

                if (tempo >= temp*3) {
                    console.log('Kabumm');
                } else if (tempo >= temp*2) {
                    console.log('A comida queimou');
                } else if (tempo < temp) {
                    console.log('Tempo Insuficiente');
                } else {
                    console.log('Prato pronto, bom apetite!!!');
                }
                break;

        case 'feijao':

                if (tempo >= temp*3) {
                    console.log('Kabumm');
                } else if (tempo >= temp*2) {
                    console.log('A comida queimou');
                } else if (tempo < temp) {
                    console.log('Tempo Insuficiente');
                } else {
                    console.log('Prato pronto, bom apetite!!!');
                }
                break;

        case 'brigadeiro':

                if (tempo >= temp*3) {
                    console.log('Kabumm');
                } else if (tempo >= temp*2) {
                    console.log('A comida queimou');
                } else if (tempo < temp) {
                    console.log('Tempo Insuficiente');
                } else {
                    console.log('Prato pronto, bom apetite!!!');
                }
                break;

        default:
            console.log('Prato inexistente');

    }
}

iniciar('feij', 36);