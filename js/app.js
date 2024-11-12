let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value === '') {
        alert('Por favor, digite um nome!');
        return;
    }

    // Converter o nome para maiúsculo
    let nomeMaiusculo = amigo.value.toUpperCase();

    // Verificar se o nome já foi adicionado
    if (amigos.includes(nomeMaiusculo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    // Adicionar o nome ao array
    amigos.push(nomeMaiusculo);
    atualizarLista();

    amigo.value = '';
}

function deletar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value === '') {
        alert('Por favor, digite um nome!');
        return;
    }

    // Converter o nome para maiúsculo
    let nomeMaiusculo = amigo.value.toUpperCase();

    // Verificar se o nome está no array
    let index = amigos.indexOf(nomeMaiusculo);
    if (index === -1) {
        alert('Este nome não está na lista!');
        return;
    }

    // Remover o nome do array
    amigos.splice(index, 1);
    atualizarLista();

}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.textContent = amigos.join(', ');
 
}


function sortear() {
    if (amigos.length < 4) {
        alert('Digite no mínimo 4 amigos!')
        return;
    }
    
    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
