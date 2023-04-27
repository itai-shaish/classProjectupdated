import React, { FC, useContext } from 'react';
import styles from './Footer.module.scss';
import { UserContext } from '../../../context/Provider';

interface FooterProps { }

const Footer: FC<FooterProps> = () => {
    const [user] = useContext(UserContext)


    return (
        <footer className={styles.Footer}>
            <p> All rights Reserved &copy;</p>
            {user.hobbies.map(hobby => <strong key={hobby}> | {hobby} |</strong>)}
        </footer>
    )
}

export default Footer;
