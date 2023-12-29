import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Slogan.module.scss';

export const Slogan = memo(() => {
    return (
        <div className={classNames(cls.Slogan, {}, [])}>
            <div className={classNames(cls.Slogan__container, {}, ['container'])}>
                <p>
                    10% Discount on first order
                </p>
                <h1>
                    Long-lasting lights,
                    to make your future bright.
                </h1>
                <button className={classNames('', {}, ['button'])}>SHOP NOW</button>
            </div>
        </div>
    );
});

Slogan.displayName = 'Slogan';
