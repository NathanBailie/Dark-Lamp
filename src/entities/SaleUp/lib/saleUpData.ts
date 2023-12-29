import arrow from 'shared/assets/icons/arrow.png';

interface Item {
    text1: string
    title: string
    text2: string
    btnImage: string
}

export const saleUpData: Item[] = [
    {
        text1: 'New Arrivals',
        title: 'Sale Up To 80% Off',
        text2: 'View Collection',
        btnImage: arrow
    },
    {
        text1: 'New Arrivals',
        title: 'Sale Up To 70% Off',
        text2: 'View Collection',
        btnImage: arrow
    }
];
