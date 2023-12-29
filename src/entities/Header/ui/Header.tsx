import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Header.module.scss';
import logo from 'shared/assets/icons/header/logo.png';
import loupe from 'shared/assets/icons/header/loupe.png';
import cart from 'shared/assets/icons/header/cart.png';
import { headerLinks } from '../lib/headerLinks';

export const Header = memo(() => {
    const links = headerLinks.map((item, id) => {
        const { linkName, href } = item;

        return (
            <li key={id}>
                <a href={href}>{linkName}</a>
            </li>
        )
    })
    return (
        <header className={classNames(cls.Header, {}, [])}>
            <div className={classNames(cls.Header__container, {}, ['container'])}>
                <div className={cls.Header__logo}>
                    <img src={logo} alt="logo" />
                    <h2>ITO</h2>
                </div>

                <nav className={cls.Header__links}>
                    <ul>
                        {links}
                    </ul>
                </nav>

                <div className={cls.Header__actions}>
                    <img src={loupe} alt="loupe" />
                    <img src={cart} alt="cart" />
                </div>
            </div>
        </header>
    );
});

Header.displayName = 'Header';
