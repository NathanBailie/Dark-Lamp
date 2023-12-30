import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import telegram from 'shared/assets/icons/telegram.png';
import cards from 'shared/assets/icons/footer/cards.png';
import { footerLinks, footerSocials } from '../lib/footerData';
import cls from './Footer.module.scss';

export const Footer = memo(() => {
    const links = footerLinks.map((elem, id) => {
        const { title, links } = elem;

        return (
            <div className={cls.Footer__linksWrapper} key={id}>
                <h3>{title}</h3>
                <div className={cls.Footer__links} key={id}>
                    {
                        links.map((item, id) => {
                            const { href, name } = item;
                            return (
                                < div className={cls.Footer__link} key={id} >
                                    {item.img && <img src={item.img} alt={item.alt} />}
                                    <a href={href}>{name}</a>
                                </div >
                            )
                        })
                    }
                </div>
            </div >
        )
    });

    const followSocials = footerSocials.links.map((item, id) => {
        const { img, alt, href } = item;

        return (
            < div className={cls.Footer__social} key={id} >
                <a href={href}>
                    <img src={img} alt={alt} /></a>
            </div >
        )
    });

    const socials = (
        < div className={cls.Footer__socialsWrapper} >
            <h3>Follow Us</h3>

            < div className={cls.Footer__socials} >
                {followSocials}
            </div>
        </div >
    );

    const input = (
        < div className={cls.Footer__inputWrapper} >
            <h3>Newsletter</h3>

            < div className={cls.Footer__inputSubwrapper} >
                <input type="text" placeholder='Enter Your Email..' />
                <button>
                    <img src={telegram} alt="telegram" />
                </button>
            </div>

            <img src={cards} alt="cards" className={cls.Footer__cardsImage} />
        </div >
    );

    return (
        <footer className={classNames(cls.Footer, {}, [])}>
            <div className={classNames(cls.Footer__container, {}, ['container'])}>
                {links}
                {socials}
                {input}
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';
