import { useState, useEffect } from "react";
import styles from './HeaderHref.module.css'

export interface HeaderHrefProps {
    href: string;
    children: React.ReactNode
}

export const HeaderHref = (props: HeaderHrefProps) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const update = () => {
            const hash = props.href.split('/')[1]
            const currentHash = window.location.hash ? window.location.hash : '#';
            const active = currentHash === hash;
            setIsActive(active);
            console.log(currentHash);
        };

        update();

        window.addEventListener("hashchange", update);
        return () => window.removeEventListener("hashchange", update);
    }, []);

    return <a href={props.href} className={`${styles.headerHref} ${isActive ? styles.active : ''}`}>
        {props.children}
    </a>
}
