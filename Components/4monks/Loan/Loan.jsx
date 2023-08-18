import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Styles from './Loan.module.scss';

const Loan = () => {
    return (
        <div className='gen4_container'>
            <div className={Styles.loan}>
                <div className={Styles.loan_inner}>
                    <div className={Styles.loan_content}>
                        <div className={Styles.loan_content_each}>
                            <div className={Styles['loan_content_each--title']}>Loan</div>
                            <div className={Styles.loan_content_each_list}>
                                <div className={Styles.loan_content_each_list_item}>
                                    <div className={Styles['loan_content_each_list_item--icon']}>
                                        <Image src='/images/gen4/payment.svg' width={24} height={24} alt='icon' />
                                    </div>
                                    No-cost EMI schemes with selected banks
                                </div>
                                <div className={Styles.loan_content_each_list_item}>
                                    <div className={Styles['loan_content_each_list_item--icon']}>
                                        <Image src='/images/gen4/fund.svg' width={24} height={24} alt='icon' />
                                    </div>
                                    Up to 100% on road funding
                                </div>
                                <div className={Styles.loan_content_each_list_item}>
                                    <div className={Styles['loan_content_each_list_item--icon']}>
                                        <Image src='/images/gen4/interest.svg' width={24} height={24} alt='icon' />
                                    </div>
                                    Interest as low as 5.99%
                                </div>
                                <div className={Styles.loan_content_each_list_item}>
                                    <div className={Styles['loan_content_each_list_item--icon']}>
                                        <Image src='/images/gen4/tenure.svg' width={24} height={24} alt='icon' />
                                    </div>
                                    Flexible loan tenures for up to 48 months
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.loan_logos} ${Styles.mob}`}>
                            <Marquee
                                gradient={false}
                                speed={50}
                                pauseOnHover={true}
                                className={Styles.loan_logos_marquee}
                            >
                                <div className={Styles.loan_logos_list}>
                                    <div className={Styles.loan_logos_list_each}>
                                        <Image src='/images/gen4/logos/mob/1.png' width={35} height={35} alt='logo' />
                                    </div>
                                    <div className={Styles.loan_logos_list_each}>
                                        <Image src='/images/gen4/logos/mob/2.png' width={35} height={35} alt='logo' />
                                    </div>
                                    <div className={Styles.loan_logos_list_each}>
                                        <Image src='/images/gen4/logos/mob/3.png' width={35} height={35} alt='logo' />
                                    </div>
                                    <div className={Styles.loan_logos_list_each}>
                                        <Image src='/images/gen4/logos/mob/4.png' width={35} height={35} alt='logo' />
                                    </div>
                                    <div className={Styles.loan_logos_list_each}>
                                        <Image src='/images/gen4/logos/mob/5.png' width={35} height={35} alt='logo' />
                                    </div>
                                    <div className={Styles.loan_logos_list_each}>
                                        <Image src='/images/gen4/logos/mob/6.png' width={35} height={35} alt='logo' />
                                    </div>
                                </div>
                            </Marquee>
                        </div>
                        <div className={Styles.loan_content_each}>
                            <div className={Styles.loan_content_each_emi}>
                                <div className={Styles['loan_content_each_emi--title']}>EMI starting from</div>
                                <div className={Styles['loan_content_each_emi--price']}>₹2975 / <span>month</span></div>
                                <div className={Styles['loan_content_each_emi--btn']}>Calculate EMI <Image src='/images/gen4/arrow-right-black.svg' width={12} height={12} alt='arrow' /></div>
                            </div>
                        </div>
                    </div>

                    <div className={`${Styles.loan_logos} ${Styles.desk}`}>
                        <Marquee
                            gradient={false}
                            speed={50}
                            pauseOnHover={true}
                            className={Styles.loan_logos_marquee}
                        >
                            <div className={Styles.loan_logos_list}>
                                <div className={Styles.loan_logos_list_each}>
                                    <Image src='/images/gen4/logos/1.png' width={125} height={60} alt='logo' />
                                </div>
                                <div className={Styles.loan_logos_list_each}>
                                    <Image src='/images/gen4/logos/2.png' width={125} height={60} alt='logo' />
                                </div>
                                <div className={Styles.loan_logos_list_each}>
                                    <Image src='/images/gen4/logos/3.png' width={125} height={60} alt='logo' />
                                </div>
                                <div className={Styles.loan_logos_list_each}>
                                    <Image src='/images/gen4/logos/4.png' width={125} height={60} alt='logo' />
                                </div>
                                <div className={Styles.loan_logos_list_each}>
                                    <Image src='/images/gen4/logos/5.png' width={125} height={60} alt='logo' />
                                </div>
                                <div className={Styles.loan_logos_list_each}>
                                    <Image src='/images/gen4/logos/6.png' width={125} height={60} alt='logo' />
                                </div>
                                <div className={Styles.loan_logos_list_each}>
                                    <Image src='/images/gen4/logos/7.png' width={125} height={60} alt='logo' />
                                </div>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loan