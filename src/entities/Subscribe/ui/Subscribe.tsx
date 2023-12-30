import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import telegram from 'shared/assets/icons/telegram.png';
import cls from './Subscribe.module.scss';

export const Subscribe = memo(() => {
    return (
        <section className={classNames(cls.Subscribe, {}, [])}>
            <div className={classNames(cls.Subscribe__container, {}, ['container'])}>
                <div className={cls.Subscribe__text}>
                    <h2>
                        Get Update
                    </h2>
                    <p>
                        Now days LED lights are generally utilized.
                    </p>
                </div>

                <div className={cls.Subscribe__input}>
                    <input type="text" placeholder="Enter Your Email.." />
                    <button className={classNames(cls.Subscribe__container, {}, ['button'])}>
                        <img src={telegram} alt="telegram" />
                    </button>
                </div>
            </div>
        </section>
    );
});

Subscribe.displayName = 'Subscribe';
