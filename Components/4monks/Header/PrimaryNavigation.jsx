import gsap from 'gsap';
import Image from 'next/image';
import React, { useLayoutEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Styles from './PrimaryNavigation.module.scss';


const PrimaryNavigation = (props) => {
    var tl;
    useLayoutEffect(() => {
        tl = gsap.timeline();
    })

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = (ele) => {
        setIsMenuOpen(ele)
    }

    return (
        <>
            <div className={`${Styles.primary_nav} ${isMenuOpen ? Styles.active : null} ${props.stikcy ? Styles.stikcy : null}`}>
                <div className={`${Styles.primary_nav_logo} ${Styles.desk_hide}`}>
                    <a href=""><Image src='/images/gen4/logo.svg' width={25} height={24} alt="logo" /></a>
                </div>
                <div className={Styles.primary_nav_each}>
                    <div className={`${Styles.primary_nav_logo} ${Styles.mob_hide}`}>
                        <a href=""><Image src='/images/gen4/logo.svg' width={25} height={24} alt="logo" /></a>
                    </div>
                    <ul className={Styles.primary_nav_each_list}>
                        <li className={Styles['primary_nav_each_list--item']}><a href="">Ather 450X</a></li>
                        <li className={Styles['primary_nav_each_list--item']}><a href="">Ather 450S <span className={Styles.new}>NEW</span></a></li>
                    </ul>
                </div>
                <div className={Styles.primary_nav_each}>
                    <ul className={`${Styles.primary_nav_each_list} ${Styles.mob_hide}`}>
                        <li className={Styles['primary_nav_each_list--item']}><a href="">Charging</a></li>
                        <li className={Styles['primary_nav_each_list--item']}><a href="">Merchandise</a></li>
                        <li className={Styles['primary_nav_each_list--item']}><a href="">Accessories</a></li>
                    </ul>
                    <HamburgerMenu openMenu={openMenu} />
                </div>
            </div>
        </>
    )
}

export default PrimaryNavigation