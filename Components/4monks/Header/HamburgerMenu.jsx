import React, { useState } from 'react';
import Styles from './PrimaryNavigation.module.scss';

const HamburgerMenu = ({ openMenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerToggle = () => {
        setIsOpen(!isOpen);
        openMenu(!isOpen)
        if (!isOpen) { document.body.style.overflow = 'hidden'; }
        else { document.body.style.overflow = 'scroll'; }
    }
    return (
        <>
            <div className={`${Styles.hamburger} ${isOpen ? Styles.open : null}`} onClick={() => hamburgerToggle()}>
                <span className={Styles.first}></span>
                <span className={Styles.second}></span>
                <span className={Styles.third}></span>
            </div>

            <div className={`${Styles.hamburger_menu} ${isOpen ? Styles.open : null}`} >
                <div className={Styles.hamburger_menu_cols}>
                    <div className={Styles.hamburger_menu_cols_each}>
                        <div className={Styles['hamburger_menu_cols_each--title']}>Ather</div>
                        <ul className={Styles.hamburger_menu_cols_each_list}>
                            <li><a href="">Ather 450X</a></li>
                            <li><a href="">Ather 450S<span className={Styles.new}>New</span></a></li>
                            <li><a href="">Charging</a></li>
                        </ul>
                    </div>
                    <div className={Styles.hamburger_menu_cols_each}>
                        <div className={Styles['hamburger_menu_cols_each--title']}>Ownership</div>
                        <ul className={Styles.hamburger_menu_cols_each_list}>
                            <li><a href="">Ather Battery Protect<sup>TM</sup></a></li>
                            <li><a href="">Ather Assure<sup>TM</sup><span className={Styles.new}>New</span></a></li>
                        </ul>
                    </div>
                    <div className={Styles.hamburger_menu_cols_each}>
                        <div className={Styles['hamburger_menu_cols_each--title']}>Shop</div>
                        <ul className={Styles.hamburger_menu_cols_each_list}>
                            <li><a href="">Accessories</a></li>
                            <li><a href="">Merchandise</a></li>
                        </ul>
                    </div>
                </div>
                <div className={Styles.hamburger_menu_footer}>
                    <ul className={Styles.hamburger_menu_footer_links}>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Dealer Locator</a></li>
                        <li><a href="">Forum</a></li>
                        <li><a href="">FAQ’s</a></li>
                    </ul>
                    <ul className={Styles.hamburger_menu_footer_links}>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Retail Partnership</a></li>
                        <li><a href="">Together Electric</a></li>
                    </ul>
                </div>
            </div>
            <span className={`${Styles.custom_overlay} ${isOpen ? Styles.active : null}`}></span>
        </>
    )
}

export default HamburgerMenu