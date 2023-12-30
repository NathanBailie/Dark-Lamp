import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Way.module.scss';

export const Way = memo(() => {
    return (
        <section className={classNames(cls.Way, {}, [])}>
            <div className={classNames(cls.Way__container, {}, ['container'])}>

                <div className={cls.Way__wrapper}>
                    <h2>
                        The intelligent way of brightening up lives.
                    </h2>
                    <p>
                        Now days LED lights are generally utilized by individuals to spare nature and power.
                        It helps carbon.
                    </p>
                    <button className={classNames('', {}, ['button'])}>SHOP NOW</button>
                </div>
            </div>
        </section>
    );
});

Way.displayName = 'Way';
