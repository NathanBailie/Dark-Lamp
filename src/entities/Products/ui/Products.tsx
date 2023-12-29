import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import cls from './Products.module.scss';
import {
    type LampDataKeys,
    type Lamp,
    lampData,
    tabsData
} from '../lib/productData';

export const Products = memo(() => {
    const [tabs, setTabs] = useState(tabsData);
    const [lamps, setLamps] = useState(lampData);
    const activeTabName = tabs.filter((item) => item.active)[0].name as LampDataKeys;

    const activateTab = (id: string) => {
        setTabs(tabs.map(item => ({ ...item, active: item.tabId === id })));
    };

    const changeColor = (activeTabName: LampDataKeys, lampOrder: number, colorId: string) => {
        setLamps(prevLamps => {
            const newColors = prevLamps[activeTabName][lampOrder].colors.map(item => ({
                ...item,
                active: item.colorId === colorId
            }));

            const newData = {
                ...prevLamps,
                [activeTabName]: [
                    ...prevLamps[activeTabName].slice(0, lampOrder),
                    {
                        ...prevLamps[activeTabName][lampOrder],
                        colors: newColors
                    },
                    ...prevLamps[activeTabName].slice(lampOrder + 1)
                ]
            };

            return newData;
        });
    }

    // tabs
    const tabsContent = tabs.map((item) => {
        const { name, tabId, active } = item;

        return (
            <button className={classNames(cls.Products__tab, { [cls.active]: active }, [])}
                key={tabId}
                onClick={() => { activateTab(tabId) }}
            >
                {name}
            </button>
        )
    });

    const lampContent = lamps[activeTabName].map((item: Lamp, lampOrder) => {
        const { name, price, imgSrc, alt, lampId, colors } = item;

        return (
            <div className={cls.Products__lamp} key={lampId}>
                <img src={imgSrc} alt={alt} className={cls.Products__lampImg} />
                <h3>{name}</h3>
                <p>${price}</p>

                <div className={cls.Products__colors}>
                    {
                        colors.map(({ color, colorId, active }) => {
                            return (
                                <button
                                    className={classNames(cls.Products__color, { [cls.active]: active }, [])}
                                    key={colorId}
                                    style={{ background: color }}
                                    onClick={() => { changeColor(activeTabName, lampOrder, colorId) }}
                                ></button>
                            )
                        })
                    }
                </div>
            </div>
        )
    })

    return (
        <section className={classNames(cls.Products, {}, [])}>
            <div className={classNames(cls.Products__container, {}, ['container'])}>
                <h2>
                    Our Best Seller
                </h2>

                <div className={cls.Products__tabs}>
                    {tabsContent}
                </div>

                <div className={cls.Products__lamps}>
                    {lampContent}
                </div>
            </div>
        </section>
    );
});

Products.displayName = 'Products';
