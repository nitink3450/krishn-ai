import { Modal, Select } from 'antd';
import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import React, { useState } from 'react';
import Styles from './Pricing.module.scss';

const Pricing = () => {
    const [isOpen, setIsOpen] = useState(false)
    const loadMore = () => {
        setIsOpen(true)
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='gen4_grey_bg'>
                <div className='gen4_container'>
                    <div className={`${Styles.pricing_wrap} ${isOpen ? Styles.open : null}`}>
                        <div className={Styles.pricing}>
                            <div className='gen4_title text_center mb_20'>Pricing</div>

                            {/* dsktop */}
                            <div className={Styles.desk}>
                                <div className='flex_center'>
                                    <Select
                                        defaultValue=" bengaluru"
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'bengaluru',
                                                label: 'Bengaluru',
                                            },
                                            {
                                                value: 'hyderabad',
                                                label: 'Hyderabad',
                                            },
                                            {
                                                value: 'vijayawada',
                                                label: 'Vijayawada',
                                            }
                                        ]}
                                        className='gen4_select'
                                    />
                                </div>
                                <div className={Styles.pricing_table}>
                                    <div className={Styles.pricing_table_list}>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                &nbsp;
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_head}>
                                                    Ather 450X
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_head}>
                                                    Ather 450S
                                                    <span className={Styles.explore}>Explore 450S</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Ex-showroom
                                                    <span className={Styles.label}>(Incl. FAME II subsidies)</span>
                                                </div>
                                                <div className={Styles.price_breakup} onClick={showModal}>
                                                    Price Breakup <Image src='/images/gen4/plus.svg' width={8} height={8} alt='icon' />
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={`${Styles.pricing_table_col2} ${Styles.end}`}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_price}>
                                                            <span className={Styles.amount}>₹ 1,16,320</span>
                                                            <span className={Styles.text}>A total powerhouse</span>
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_price}>
                                                            <span className={Styles.label}>
                                                                <Image src='/images/gen4/performance.svg' width={8} height={10} alt='icon' />
                                                                With performance pack
                                                            </span>
                                                            <span className={Styles.amount}>₹ 1,16,320</span>
                                                            <span className={Styles.text}>The ultimate Ather</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={`${Styles.pricing_table_col2} ${Styles.end}`}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_price}>
                                                            <span className={Styles.amount}>₹ 1,16,320</span>
                                                            <span className={Styles.text}>Serious Value</span>
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_price}>
                                                            <span className={Styles.label}>
                                                                <Image src='/images/gen4/performance.svg' width={8} height={10} alt='icon' />
                                                                With performance pack
                                                            </span>
                                                            <span className={Styles.amount}>₹ 1,16,320</span>
                                                            <span className={Styles.text}>Serious power</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Color
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_colors}>
                                                            <span style={{ background: '#000000' }}></span>
                                                            <span style={{ background: '#FFFFFF', border: '1px solid #D7D7D7' }}></span>
                                                            <span style={{ background: '#B8DDB5' }}></span>
                                                            <span style={{ background: '#B8DDB5' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_colors}>
                                                            <span style={{ background: '#000000' }}></span>
                                                            <span style={{ background: '#FFFFFF', border: '1px solid #D7D7D7' }}></span>
                                                            <span style={{ background: '#B8DDB5' }}></span>
                                                            <span style={{ background: '#B8DDB5' }}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_colors}>
                                                            <span style={{ background: '#000000' }}></span>
                                                            <span style={{ background: '#FFFFFF', border: '1px solid #D7D7D7' }}></span>
                                                            <span style={{ background: '#B8DDB5' }}></span>
                                                            <span style={{ background: '#B8DDB5' }}></span>
                                                            <span style={{ background: '#CA2C2C' }}></span>
                                                            <span style={{ background: '#C7C7C7' }}></span>
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_colors}>
                                                            <span style={{ background: '#000000' }}></span>
                                                            <span style={{ background: '#FFFFFF', border: '1px solid #D7D7D7' }}></span>
                                                            <span style={{ background: '#B8DDB5' }}></span>
                                                            <span style={{ background: '#B8DDB5' }}></span>
                                                            <span style={{ background: '#CA2C2C' }}></span>
                                                            <span style={{ background: '#C7C7C7' }}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    0-40 Km/h
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>3.9 sec</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>3.9 sec</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>3.9 sec</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>3.3 sec</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Top speed
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>90Kmph</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>90Kmph</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>90Kmph</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>90Kmph</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Riding Modes
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Smart Eco / Eco, <br />
                                                            Ride,<br />
                                                            Sport</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Smart Eco / Eco,<br />
                                                            Ride,<br />
                                                            Sport</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Smart Eco / Eco,<br />
                                                            Ride,<br />
                                                            Sport</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Smart Eco/Eco,<br />
                                                            Ride,<br />
                                                            Sport,<br />
                                                            Warp</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Certified Range
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>112 Km</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>156 Km</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>111 Km</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>158 Km</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    True Range<sup>TM</sup>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>90 Km</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>115 Km</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>90 Km</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>115 Km</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Battery Warranty
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>3yrs</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>5yrs</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>3yrs</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>5yrs</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Screen
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Reverse LCD</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Reverse LCD</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>7” TFT Touchscreen</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>7” TFT Touchscreen</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Bluetooth - Calls & Music
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Navigation
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Turn by Turn</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Turn by Turn</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Google Maps</div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>Google Maps</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    Reverse Assist
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_table_list_each}>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_feature}>
                                                    AutoHold<sup>TM</sup>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/times.svg' width={11} height={11} alt='icon' />
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_table_list_each_item}>
                                                <div className={Styles.pricing_table_col2}>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                    <div className={Styles.col}>
                                                        <div className={Styles.pricing_table_text}>
                                                            <Image src='/images/gen4/check.svg' width={16} height={16} alt='icon' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* dsktop */}




                            {/* mobile */}
                            <div className={Styles.mob}>
                                <div className='flex_center'>
                                    <Select
                                        defaultValue=" bengaluru"
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'bengaluru',
                                                label: 'Bengaluru',
                                            },
                                            {
                                                value: 'hyderabad',
                                                label: 'Hyderabad',
                                            },
                                            {
                                                value: 'vijayawada',
                                                label: 'Vijayawada',
                                            }
                                        ]}
                                        className='gen4_select_v2'
                                    />
                                </div>

                                <div className={Styles.pricing_product}>
                                    <div className={Styles.pricing_product_each}>
                                        <div className={Styles.pricing_product_each_item}>
                                            <Select
                                                defaultValue=" ather_450S"
                                                onChange={handleChange}
                                                options={[
                                                    {
                                                        value: 'ather_450S',
                                                        label: 'Ather 450S',
                                                    },
                                                    {
                                                        value: 'ather_450X',
                                                        label: HTMLReactParser('Ather 450X<br/><span class="gen4_select_v3_label"><Image src="/images/gen4/performance.svg" width={9} height={9} />with pro pack</span>'),
                                                    }
                                                ]}
                                                className='gen4_select_v3'
                                            />
                                        </div>
                                        <div className={Styles.pricing_product_each_item}>
                                            <Select
                                                defaultValue=" ather_450X"
                                                onChange={handleChange}
                                                options={[
                                                    {
                                                        value: 'ather_450S',
                                                        label: 'Ather 450S',
                                                    },
                                                    {
                                                        value: 'ather_450X',
                                                        label: HTMLReactParser('Ather 450X<br/><span class="gen4_select_v3_label"><Image src="/images/gen4/performance.svg" width={9} height={9} />with pro pack</span>'),
                                                    }
                                                ]}
                                                className='gen4_select_v3'
                                            />
                                        </div>
                                    </div>
                                    <div className={Styles.pricing_product_each}>
                                        <div className={Styles.pricing_product_each_item}>
                                            <div className={Styles.pricing_product_feature}>
                                                Series power
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_product_each_item}>
                                            <div className={Styles.pricing_product_feature}>
                                                The Ultimate Ather
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.pricing_product_each}>
                                        <div className={Styles.pricing_product_each_item}>
                                            <div className={Styles.pricing_product_price}>
                                                ₹1,05,320
                                                <span>Ex-showroom <br />
                                                    (incl. FAME II subsidies
                                                    & charger)</span>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_product_each_item}>
                                            <div className={Styles.pricing_product_price}>
                                                ₹1,45,000
                                                <span>Ex-showroom <br />
                                                    (incl. FAME II subsidies
                                                    & charger)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text_center'>
                                        <div className={Styles.price_breakup}>
                                            Price Breakup <Image src='/images/gen4/plus.svg' width={8} height={8} alt='icon' />
                                        </div>
                                    </div>
                                </div>





                                <div className={Styles.pricing_summary}>
                                    <div className={Styles['pricing_summary--title']}>Summary</div>
                                    <div className={Styles.pricing_summary_list}>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>True range</div>
                                                <div className={Styles.pricing_table_text}>90 Km</div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>105 Km</div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>0-40 Km/h</div>
                                                <div className={Styles.pricing_table_text}>3.9 s</div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>3.9 s</div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>Colors</div>
                                                <div className={Styles.pricing_table_text}>
                                                    <div className={Styles.pricing_table_colors}>
                                                        <span style={{ background: '#000000' }}></span>
                                                        <span style={{ background: '#FFFFFF', border: '1px solid #D7D7D7' }}></span>
                                                        <span style={{ background: '#B8DDB5' }}></span>
                                                        <span style={{ background: '#B8DDB5' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>
                                                    <div className={Styles.pricing_table_colors}>
                                                        <span style={{ background: '#000000' }}></span>
                                                        <span style={{ background: '#FFFFFF', border: '1px solid #D7D7D7' }}></span>
                                                        <span style={{ background: '#B8DDB5' }}></span>
                                                        <span style={{ background: '#B8DDB5' }}></span>
                                                        <span style={{ background: '#CA2C2C' }}></span>
                                                        <span style={{ background: '#C7C7C7' }}></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>Navigation</div>
                                                <div className={Styles.pricing_table_text}>Turn by turn</div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>Full Google Maps</div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>Riding modes</div>
                                                <div className={Styles.pricing_table_text}>Eco <br />
                                                    Smart Eco</div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>Eco <br />
                                                    Warp<br />
                                                    Sports<br />
                                                    Ride<br />
                                                    Smart Eco</div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>Certified Range</div>
                                                <div className={Styles.pricing_table_text}>112 Km</div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>156 Km</div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>True Range<sup>TM</sup></div>
                                                <div className={Styles.pricing_table_text}>90 Km</div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>115 Km</div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>Battery Warranty</div>
                                                <div className={Styles.pricing_table_text}>3yrs</div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>5yrs</div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>Screen</div>
                                                <div className={Styles.pricing_table_text}>Reverse LCD</div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>7” TFT Touchscreen</div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>Bluetooth - Calls & Music</div>
                                                <div className={Styles.pricing_table_text}><Image src='/images/gen4/check.svg' width={12} height={12} alt='icon' /></div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}><Image src='/images/gen4/check.svg' width={12} height={12} alt='icon' /></div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>Navigation</div>
                                                <div className={Styles.pricing_table_text}>Turn by Turn</div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}>Google Maps</div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>Reverse Assist</div>
                                                <div className={Styles.pricing_table_text}><Image src='/images/gen4/check.svg' width={12} height={12} alt='icon' /></div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}><Image src='/images/gen4/check.svg' width={12} height={12} alt='icon' /></div>
                                            </div>
                                        </div>
                                        <div className={Styles.pricing_summary_list_each}>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>AutoHold<sup>TM</sup></div>
                                                <div className={Styles.pricing_table_text}><Image src='/images/gen4/times.svg' width={10} height={10} alt='icon' /></div>
                                            </div>
                                            <div className={Styles.pricing_summary_list_each_item}>
                                                <div className={Styles.pricing_table_label}>&nbsp;</div>
                                                <div className={Styles.pricing_table_text}><Image src='/images/gen4/check.svg' width={12} height={12} alt='icon' /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* mobile */}

                        </div>
                        <div className='text_center'>
                            <div className={Styles.pricing_btn}>Full comparison <Image src='/images/gen4/arrow-right.svg' width={12} height={12} alt='icon' /></div>
                        </div>
                        <div className='text_center'>
                            <div className={Styles.loadmore} onClick={loadMore}>
                                Load more  <Image src='/images/gen4/plus.svg' width={8} height={8} alt='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='space_60'></div>
                </div>
            </div>

            <Modal className='pricing_modal' centered width={1130} open={isModalOpen} onCancel={handleCancel} footer={false} closeIcon={<Image src='/images/gen4/close.svg' width={40} height={40} alt='close' />}>
                <div className={Styles.pricing_modal_block}>
                    <div className={Styles.pricing_modal_block_info}>
                        <div className='space_100'></div>
                        <div className={Styles.pricing_modal_block_info_each}>
                            <div className={Styles['pricing_modal_block_info_each--label']}>Ex showroom price (Excluding Subsidies)</div>
                            <div className={Styles['pricing_modal_block_info_each--select']}>
                                <Select
                                    defaultValue=" bengaluru"
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: 'bengaluru',
                                            label: 'Bengaluru',
                                        },
                                        {
                                            value: 'hyderabad',
                                            label: 'Hyderabad',
                                        },
                                        {
                                            value: 'vijayawada',
                                            label: 'Vijayawada',
                                        }
                                    ]}
                                    className='gen4_select_v2'
                                />
                            </div>
                        </div>
                        <div className={Styles.pricing_modal_block_info_each}>
                            <div className={Styles['pricing_modal_block_info_each--title']}>Performance upgrade <svg xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d=" M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" fill='#5C6470' stroke='#5C6470' /></svg></div>
                            <div className={Styles['pricing_modal_block_info_each--text']}>The software pack that unlocks Warp and Bluetooth to add on to the performance</div>
                        </div>
                        <div className={Styles.pricing_modal_block_info_each}>
                            <div className={Styles['pricing_modal_block_info_each--title']}>Optional Ather Dot/Portable charger</div>
                        </div>
                        <div className={Styles.pricing_modal_block_info_each}>
                            <div className={`${Styles['pricing_modal_block_info_each--title']} ${Styles.green}`}>FAME || incentive <svg xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d=" M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" fill='#31A93E' stroke='#31A93E' /></svg></div>
                        </div>
                        <div className={Styles.pricing_modal_block_info_each}>
                            <div className={Styles['pricing_modal_block_info_each--title']}>Effective Price
                                <span>(Incl.FAME ||, performance upgrade and optional Ather Dot/Portable charger)</span></div>
                            <div className={Styles['pricing_modal_block_info_each--text']}>Exclusive of insurance, Road tax & Registration charges. All prices are inclusive of G.S.T.</div>
                        </div>
                    </div>
                    <div className={Styles.pricing_modal_block_content}>
                        <div className={`${Styles.pricing_table} ${Styles.two_cols}`}>
                            <div className={Styles.pricing_table_list}>
                                <div className={Styles.pricing_table_list_each}>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_head}>
                                            Ather 450X
                                        </div>
                                    </div>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_head}>
                                            Ather 450S
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.pricing_table_list_each}>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={`${Styles.pricing_table_col2} ${Styles.end}`}>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_price}>
                                                    <span className={Styles.amount}>₹ 1,16,320</span>
                                                    <span className={Styles.text}>A total powerhouse</span>
                                                </div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_price}>
                                                    <span className={Styles.label}>
                                                        <Image src='/images/gen4/performance.svg' width={8} height={10} alt='icon' />
                                                        With performance pack
                                                    </span>
                                                    <span className={Styles.amount}>₹ 1,16,320</span>
                                                    <span className={Styles.text}>The ultimate Ather</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={`${Styles.pricing_table_col2} ${Styles.end}`}>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_price}>
                                                    <span className={Styles.amount}>₹ 1,16,320</span>
                                                    <span className={Styles.text}>Serious Value</span>
                                                </div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_price}>
                                                    <span className={Styles.label}>
                                                        <Image src='/images/gen4/performance.svg' width={8} height={10} alt='icon' />
                                                        With performance pack
                                                    </span>
                                                    <span className={Styles.amount}>₹ 1,16,320</span>
                                                    <span className={Styles.text}>Serious power</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.pricing_table_list_each}>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_col2}>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_text}>-</div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_text}>₹ 6,320</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_col2}>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_text}>₹16,320</div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_text}>₹ 26,320</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.pricing_table_list_each}>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_col2}>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_text}>₹ 16,320</div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_text}>₹ 16,320</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_col2}>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_text}>₹ 26,320</div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={Styles.pricing_table_text}>₹ 26,320</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.pricing_table_list_each}>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_col2}>
                                            <div className={Styles.col}>
                                                <div className={`${Styles.pricing_table_text} ${Styles.green}`}>₹ 16,320</div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={`${Styles.pricing_table_text} ${Styles.green}`}>₹ 16,320</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_col2}>
                                            <div className={Styles.col}>
                                                <div className={`${Styles.pricing_table_text} ${Styles.green}`}>₹ 26,320</div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={`${Styles.pricing_table_text} ${Styles.green}`}>₹ 26,320</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={Styles.pricing_table_list_each}>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_col2}>
                                            <div className={Styles.col}>
                                                <div className={`${Styles.pricing_table_text} ${Styles.big}`}>₹ 16,320</div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={`${Styles.pricing_table_text} ${Styles.big}`}>₹ 16,320</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={Styles.pricing_table_list_each_item}>
                                        <div className={Styles.pricing_table_col2}>
                                            <div className={Styles.col}>
                                                <div className={`${Styles.pricing_table_text} ${Styles.big}`}>₹ 26,320</div>
                                            </div>
                                            <div className={Styles.col}>
                                                <div className={`${Styles.pricing_table_text} ${Styles.big}`}>₹ 26,320</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </Modal >

        </>
    )
}

export default Pricing