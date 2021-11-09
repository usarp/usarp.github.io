import status from '../assets/img/cards/status-do-sistema.png'
import interacao from '../assets/img/cards/interacao.png'
import alerta from '../assets/img/cards/alerta.png'
import feedback from '../assets/img/cards/feedback-sobre-o-processo.png'
import desfazer from '../assets/img/cards/desfazer.png'
// import abortar from '../assets/img/cards/abortar-operacao.png'
import cancelar from '../assets/img/cards/cancelar.png'
import voltar from '../assets/img/cards/voltar.png'
import entrada from '../assets/img/cards/entrada-de-texto-estruturada.png'
import execucao from '../assets/img/cards/execucao-passo-a-passo.png'
import preferencias from '../assets/img/cards/preferencias.png'
import areas from '../assets/img/cards/areas-de-objetos-pessoais.png'
// import favoritos from '../assets/img/cards/favoritos.png'
import ajuda from '../assets/img/cards/ajuda-multinivel.png'

const cards = [
    { id: 'M1', name: 'Status do Sistema', img: status },
    { id: 'M2', name: 'Interação', img: interacao },
    { id: 'M3', name: 'Alerta', img: alerta },
    { id: 'M4', name: 'Feedback sobre o processo', img: feedback },
    { id: 'M5', name: 'Desfazer', img: desfazer },
    // { id: 'M6', name: 'Abortar Operação', img: abortar },
    { id: 'M7', name: 'Cancelar', img: cancelar },
    { id: 'M8', name: 'Voltar', img: voltar },
    { id: 'M9', name: 'Entrada de Texto Estruturada', img: entrada },
    { id: 'M10', name: 'Execução Passo a Passo', img: execucao },
    { id: 'M11', name: 'Preferências', img: preferencias },
    { id: 'M12', name: 'Áreas de Objetos Pessoais', img: areas },
    // { id: 'M13', name: 'Favoritos', img: favoritos },
    { id: 'M14', name: 'Ajuda Multinível', img: ajuda },
]

export function getAllCards() {
    return cards;
}

export function getCardByKey(key) {
    return cards.filter(c => c.id === key)[0];
}