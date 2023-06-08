let images = {};

let r = require.context('../assets/img/cards/prototyping', false, /\.png/);
r.keys().map(item => { images[item.replace('./', '')] = r(item); });

const cards = [
    {
        id: 'M1',
        options: [
            { id: 'P1', img: images['p1.png'].default },
            { id: 'P2', img: images['p2.png'].default },
            { id: 'P3', img: images['p3.png'].default }
        ]
    },
    {
        id: 'M2',
        options: [
            { id: 'P4', img: images['p4.png'].default },
        ]
    },
    {
        id: 'M3',
        options: [
            { id: 'P5', img: images['p5.png'].default },
        ]
    },
    {
        id: 'M4',
        options: [
            { id: 'P6', img: images['p6.png'].default },
        ]
    },
    {
        id: 'M5',
        options: [
            { id: 'P7', img: images['p7.png'].default },
        ]
    },
    {
        id: 'M6',
        options: [
            { id: 'P8', img: images['p8.png'].default },
        ]
    },
    {
        id: 'M7',
        options: [
            { id: 'P9', img: images['p9.png'].default },
        ]
    },
    {
        id: 'M8',
        options: [
            { id: 'P10', img: images['p10.png'].default },
        ]
    },
    {
        id: 'M9',
        options: [
            { id: 'P11', img: images['p11.png'].default },
        ]
    },
    {
        id: 'M10',
        options: [
            { id: 'P12', img: images['p12.png'].default },
        ]
    },
    {
        id: 'M11',
        options: [
            { id: 'P13', img: images['p13.png'].default },
        ]
    },
    {
        id: 'M12',
        options: [
            { id: 'P14', img: images['p14.png'].default },
        ]
    },
    {
        id: 'M13',
        options: [
            { id: 'P15', img: images['p15.png'].default },
        ]
    },
    {
        id: 'M14',
        options: [
            { id: 'P16', img: images['p16.png'].default },
            { id: 'P17', img: images['p14.png'].default },
        ]
    },
];

export function getAllCards() {
    return cards;
}

export function getCardsByGroup(key) {
    return cards.filter(c => c.id === key)[0];
}