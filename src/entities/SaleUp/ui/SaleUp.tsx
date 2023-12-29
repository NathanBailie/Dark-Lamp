import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { saleUpData } from '../lib/saleUpData';
import cls from './SaleUp.module.scss';

export const SaleUp = memo(() => {
    const content = saleUpData.map((item, id) => {
        const { text1, title, text2, btnImage } = item;

        return (
            <section className={cls.SaleUp__item} key={id}>
                <h3>{text1}</h3>
                <h2>{title}</h2>
                <div className={cls.SaleUp__collection}>
                    <h4>{text2}</h4>
                    <a href="#">
                        <img src={btnImage} alt="arrow" />
                    </a>
                </div>
            </section>
        )
    })
    return (
        <div className={classNames(cls.SaleUp, {}, [])}>
            <div className={classNames(cls.SaleUp__container, {}, ['container'])}>
                {content}
            </div>
        </div>
    );
});

SaleUp.displayName = 'SaleUp';
