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

import { getCardsByGroup as getReq } from './reqCards';
import { getCardsByGroup as getProt } from './protCards';

const cards = [
    { id: 'M1', name: 'Status do Sistema', img: status, requirements: getReq('M1').options, prototyping: getProt('M1').options},
    { id: 'M2', name: 'Interação', img: interacao, requirements: getReq('M2').options, prototyping: getProt('M2').options},
    { id: 'M3', name: 'Alerta', img: alerta, requirements: getReq('M3').options, prototyping: getProt('M3').options },
    { id: 'M4', name: 'Feedback sobre o processo', img: feedback, requirements: getReq('M4').options, prototyping: getProt('M4').options },
    { id: 'M5', name: 'Desfazer', img: desfazer, requirements: getReq('M5').options, prototyping: getProt('M5').options },
    // { id: 'M6', name: 'Abortar Operação', img: abortar, requirements: getReq('M6').options, prototyping: getProt('M6').options },
    { id: 'M7', name: 'Cancelar', img: cancelar, requirements: getReq('M7').options, prototyping: getProt('M7').options },
    { id: 'M8', name: 'Voltar', img: voltar, requirements: getReq('M8').options, prototyping: getProt('M8').options },
    { id: 'M9', name: 'Entrada de Texto Estruturada', img: entrada, requirements: getReq('M9').options, prototyping: getProt('M9').options },
    { id: 'M10', name: 'Execução Passo a Passo', img: execucao, requirements: getReq('M10').options, prototyping: getProt('M10').options },
    { id: 'M11', name: 'Preferências', img: preferencias, requirements: getReq('M11').options, prototyping: getProt('M11').options },
    { id: 'M12', name: 'Áreas de Objetos Pessoais', img: areas, requirements: getReq('M12').options, prototyping: getProt('M12').options },
    // { id: 'M13', name: 'Favoritos', img: favoritos, requirements: getReq('M13').options, prototyping: getProt('M13').options },
    { id: 'M14', name: 'Ajuda Multinível', img: ajuda, requirements: getReq('M14').options, prototyping: getProt('M14').options },
];

export function getAllCards() {
    return cards;
}

export function getCardByKey(key) {
    return cards.filter(c => c.id === key)[0];
}