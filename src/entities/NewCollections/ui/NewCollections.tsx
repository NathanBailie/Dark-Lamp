import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './NewCollections.module.scss';
import grenade from 'shared/assets/img/grenade.png';
import shy from 'shared/assets/img/shy.png';
import lampbg from 'shared/assets/img/bg/lamp-bg.png';

export const NewCollections = memo(() => {
    return (
        <section className={classNames(cls.NewCollections, {}, [])}>
            <div className={classNames(cls.NewCollections__container, {}, ['container'])}>
                <div className={cls.NewCollections__info}>
                    <h2 className={cls.NewCollections__title}>
                        New Collections
                    </h2>

                    <p className={cls.NewCollections__subtitle}>
                        Now days LED lights are generally utilized by
                        individuals to spare nature and power.
                        It helps to lessen carbon discharge that assumes an essential part
                        to make environment contaminated.
                    </p>

                    <div className={cls.NewCollections__items}>
                        <div className={cls.NewCollections__item}>
                            <img src={shy} alt="shy" />
                            <h3>
                                Desktop Grenade Lamp
                            </h3>
                            <p>
                                $120.00
                            </p>
                            <button className={classNames('', {}, ['button'])}>Buy Now</button>
                        </div>

                        <div className={cls.NewCollections__item}>
                            <img src={grenade} alt="grenade" />
                            <h3>
                                One Man Shy Lamp
                            </h3>
                            <p>
                                $190.00
                            </p>
                            <button className={classNames('', {}, ['button'])}>Buy Now</button>
                        </div>
                    </div>
                </div>

                <div className={cls.NewCollections__image}>
                    <img src={lampbg} alt="lampbg" />
                    <button className={classNames('', {}, ['button'])}>SHOP NOW</button>
                </div>
            </div>
        </section>
    );
});

NewCollections.displayName = 'NewCollections';
