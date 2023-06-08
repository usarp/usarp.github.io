let images = {};

let r = require.context('../assets/img/cards/requirements', false, /\.png/);
r.keys().map(item => { images[item.replace('./', '')] = r(item); });

const cards = [
    {
        id: 'M1',
        options: [
            { id: 'R1', img: images['r1.png'].default},
            { id: 'R2', img: images['r2.png'].default}
        ]
    }, 
    {
        id: 'M2',
        options: [
            { id: 'R3', img: images['r3.png'].default},
        ]
    },
    {
        id: 'M3',
        options: [
            { id: 'R4', img: images['r4.png'].default},
        ]
    },
    {
        id: 'M4',
        options: [
            { id: 'R5', img: images['r5.png'].default},
        ]
    },
    {
        id: 'M5',
        options: [
            { id: 'R6', img: images['r6.png'].default},
            { id: 'R7', img: images['r7.png'].default},
        ]
    },
    {
        id: 'M6',
        options: [
            { id: 'R8', img: images['r8.png'].default},
        ]
    },
    {
        id: 'M7',
        options: [
            { id: 'R9', img: images['r9.png'].default},
        ]
    },
    {
        id: 'M8',
        options: [
            { id: 'R10', img: images['r10.png'].default},
            { id: 'R11', img: images['r11.png'].default},
        ]
    },
    {
        id: 'M9',
        options: [
            { id: 'R12', img: images['r12.png'].default},
        ]
    },
    {
        id: 'M10',
        options: [
            { id: 'R13', img: images['r13.png'].default},
            { id: 'R14', img: images['r14.png'].default},
        ]
    },
    {
        id: 'M11',
        options: [
            { id: 'R15', img: images['r15.png'].default},
        ]
    },
    {
        id: 'M12',
        options: [
            { id: 'R16', img: images['r16.png'].default},
        ]
    },
    {
        id: 'M13',
        options: [
            { id: 'R17', img: images['r17.png'].default},
            { id: 'R18', img: images['r18.png'].default},
        ]
    },
    {
        id: 'M14',
        options: [
            { id: 'R19', img: images['r19.png'].default},
            { id: 'R20', img: images['r20.png'].default},
        ]
    },
]

export function getAllCards() {
    return cards;
}

export function getCardsByGroup(key) {
    return cards.filter(c => c.id === key)[0];
}