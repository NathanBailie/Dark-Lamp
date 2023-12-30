import rock from 'shared/assets/img/blog/rock.png';
import torchiere from 'shared/assets/img/blog/torchiere.png';
import tree from 'shared/assets/img/blog/tree.png';

interface Item {
    img: string
    alt: string
    title: string
    text: string
    linkSrc: string
}

export const blogData: Item[] = [
    {
        img: rock,
        alt: 'rock',
        title: 'Stacked Rock Lamp',
        text: 'Now days LED lights are generally utilized by individuals to spare nature and power. It helps carbon.',
        linkSrc: '#'
    },
    {
        img: torchiere,
        alt: 'torchiere',
        title: 'Torchiere Lamp',
        text: 'Now days LED lights are generally utilized by individuals to spare nature and power. It helps carbon.',
        linkSrc: '#'
    },
    {
        img: tree,
        alt: 'tree',
        title: 'Multi-Way or Tree Lamp',
        text: 'Now days LED lights are generally utilized by individuals to spare nature and power. It helps carbon.',
        linkSrc: '#'
    }
];
