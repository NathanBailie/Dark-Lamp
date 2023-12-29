import uuid from 'react-uuid';
import drum from 'shared/assets/img/lamps/drum.png';
import tripod from 'shared/assets/img/lamps/tripod.png';
import torchiere from 'shared/assets/img/lamps/torchiere.png';
import arm from 'shared/assets/img/lamps/arm.png';
import modern from 'shared/assets/img/lamps/modern.png';
import mushroom from 'shared/assets/img/lamps/mushroom.png';
import rock from 'shared/assets/img/lamps/rock.png';
import morbid from 'shared/assets/img/lamps/morbid.png';

interface Tab {
    name: string
    tabId: string
    active: boolean
}

export interface Lamps {
    'Floor Lamps': Lamp[]
    'Indoor': Lamp[]
    'Outdoor': Lamp[]
}

export type LampDataKeys = keyof Lamps;

export interface Lamp {
    name: string
    price: number
    imgSrc: string
    alt: string
    lampId: string
    colors: Colors[]
}

interface Colors {
    color: string
    active: boolean
    colorId: string
}

export const tabsData: Tab[] = [
    createTab('Floor Lamps', true),
    createTab('Indoor', false),
    createTab('Outdoor', false)
];

export const lampData: Lamps = {
    'Floor Lamps': [
        createLamp('Silk Drum Lamp Shade', 20, drum, 'drum-lamp', '#360050', '#BD6B24', '#FF7A0F'),
        createLamp('Tripod Lamps', 15, tripod, 'tripod-lamp', '#360050', '#FEAB4B', '#FF7A0F'),
        createLamp('Torchiere Floor Lamps', 30, torchiere, 'torchiere-lamp', '#360050', '#BB9F90', '#FF7A0F'),
        createLamp('Boom Arm Lamps', 75, arm, 'arm-lamp', '#360050', '#FEFBD6', '#FF7A0F'),
        createLamp('Mid-Century Modern', 55, modern, 'modern-lamp', '#360050', '#9D690C', '#FF7A0F'),
        createLamp('The Mushroom Lamp', 80, mushroom, 'mushroom-lamp', '#360050', '#262D30', '#FF7A0F'),
        createLamp('Stacked Rock Lamp', 60, rock, 'rock-lamp', '#360050', '#FFEABB', '#FF7A0F'),
        createLamp('This morbid lamp', 99, morbid, 'morbid-lamp', '#360050', '#BFBFB3', '#FF7A0F')
    ],
    Indoor: [],
    Outdoor: []
}

function createTab(name: string, active: boolean): Tab {
    return { name, tabId: uuid(), active };
}

function createLamp(
    name: string,
    price: number,
    imgSrc: string,
    alt: string,
    color1: string,
    color2: string,
    color3: string
): Lamp {
    return {
        name,
        price,
        imgSrc,
        alt,
        lampId: uuid(),
        colors: [
            createColor(color1, false),
            createColor(color2, true),
            createColor(color3, false)
        ]
    }
}

function createColor(color: string, active: boolean) {
    return { color, active, colorId: uuid() };
}
