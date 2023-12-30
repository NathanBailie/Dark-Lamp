import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { blogData } from '../lib/blogData';
import cls from './Blog.module.scss';

export const Blog = memo(() => {
    const blogContent = blogData.map((item, id) => {
        const { img, alt, title, text, linkSrc } = item;

        return (
            <div className={cls.Blog__item} key={id}>
                <img src={img} alt={alt} />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={linkSrc}>Read More</a>
            </div>
        )
    });

    return (
        <section className={classNames(cls.Blog, {}, [])}>
            <div className={classNames(cls.Blog__container, {}, ['container'])}>
                <h2>
                    Our Blog
                </h2>

                <div className={cls.Blog__items}>
                    {blogContent}
                </div>
            </div>
        </section>
    );
});

Blog.displayName = 'Blog';
