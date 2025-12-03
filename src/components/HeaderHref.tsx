import { useState, useEffect } from "react";
import styles from './HeaderHref.module.css'

export interface HeaderHrefProps {
    href: string;
    children: React.ReactNode
}

export const HeaderHref = (props: HeaderHrefProps) => {
    const [isActive, setActive] = useState(false);

    useEffect(() => {
        const hash = props.href.split('/')[1]
        if (!hash.startsWith('#')) {
            const pathname = window.location.pathname.replace(/\/$/, '')
            setActive(pathname === props.href)
            return;
        }
        const element = document.querySelector(hash)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    setActive(entry.isIntersecting && entry.intersectionRect.top <= 92);
                });
            },
            {
                rootMargin: `-92px 0px 0px 0px`,
                threshold:  Array.from({ length: 1000 }, (_, i) => i / 1000),
            }
        );

        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, []);

    return <a {...props} href={props.href} className={`${styles.headerHref} ${isActive ? styles.active : ''}`}>
        {props.children}
    </a>
}
