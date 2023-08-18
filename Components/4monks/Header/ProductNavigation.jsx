import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Styles from './ProductNavigation.module.scss';

const ProductNavigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHide, setIsHide] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = (ele) => {
        setIsMenuOpen(ele)
    }

    useEffect(() => {
        let scrollpos = window.scrollY

        const header = document.querySelector(`.${Styles.product_nav}`)
        const scrollChange = 146


        const add_class_on_scroll = () => header.classList.add(`${Styles.active}`);
        const remove_class_on_scroll = () => header.classList.remove(`${Styles.active}`);

        const _footer = document.getElementById('gen4_footer').offsetTop - document.getElementById('gen4_footer').offsetHeight;

        window.addEventListener('scroll', function () {
            scrollpos = window.scrollY;

            if (scrollpos >= scrollChange) { add_class_on_scroll() }
            else { remove_class_on_scroll() }

            if (scrollpos >= _footer) { setIsHide(true) }
            else { setIsHide(false) }

        })
    })

    return (
        <>
            <div className={`${Styles.desk_hide} space_60`}></div>
            <div className={Styles.product_title}>{props.title}</div>
            <div className={Styles.product_nav}>
                <div className={Styles.product_nav_each}>
                    <div className={`${Styles.product_nav_logo} ${Styles.desk_hide}`}>
                        <a href=""><Image src='/images/gen4/logo.svg' width={25} height={24} alt="logo" /></a>
                    </div>
                    {/* <div className={Styles.product_nav_logo_text}>
                        <a href="">Ather 450X</a>
                    </div> */}
                    <ul className={`${Styles.product_nav_each_list} ${isOpen ? Styles.open : null}`}>

                        {props.menu.map((item, i) => {
                            return (
                                <li className={Styles['product_nav_each_list--item']} key={i}><a href="">{item}</a></li>
                            )
                        })}
                    </ul>
                </div>
                <div className={Styles.product_nav_each}>
                    <div className={Styles.mob_hide}>
                        <div className={Styles.product_order}>
                            <div className={Styles['product_order--price']}>
                                <span>Starting at</span>
                                <span>{props.price}</span>
                            </div>
                            <div className={Styles['product_order--text']}>Book a test ride</div>
                            <div className={Styles['product_order--btn']}>
                                Order now <Image src='/images/gen4/arrow-right.svg' width={10} height={10} alt='arrow' />
                            </div>
                        </div>
                    </div>
                    <div className={Styles.desk_hide}>
                        <div className={`${Styles.product_nav_each_list_dropdown} ${isOpen ? Styles.open : null}`} onClick={() => setIsOpen(!isOpen)}>
                            Performance <Image src='/images/gen4/chevron-down.svg' width={12} height={12} alt='arrow' />
                        </div>
                    </div>
                    <div className={Styles.desk_hide}>
                        <HamburgerMenu openMenu={openMenu} />
                    </div>
                </div>
            </div>
            <div className={`${Styles.desk_hide}`}>
                <div className={`${Styles.product_order} ${isHide ? Styles.hide : null}`}>
                    <div className={Styles['product_order--price']}>
                        <span>Starting at</span>
                        <span>₹1,15,000</span>
                    </div>
                    <div className={Styles['product_order--text']}>Book a test ride</div>
                    <div className={Styles['product_order--btn']}>
                        Order now <Image src='/images/gen4/arrow-right.svg' width={10} height={10} alt='arrow' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductNavigation