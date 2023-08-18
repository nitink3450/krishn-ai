import HTMLReactParser from 'html-react-parser';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { Autoplay, Controller, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Styles from './GridApp.module.scss';
import gridAppData from "./gridAppData.json";
 
const GridApp = (props) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return (
        <div className={Styles.gridapp_wrap}>
            <div className={Styles.gridapp}>
                {props.data.map((item, index) => {
                    return (
                        <>
                            <div className={Styles.gridapp_cols} key={index}>
                                <div className={Styles.gridapp_cols_each}>
                                    <div className={Styles.gridapp_title} data-aos="fade-in">Ather <br />
                                        Grid app</div>
                                </div>


                                <div className={Styles.gridapp_cols_each}>
                                    <div className={Styles.gridapp_mob} data-aos="fade-up">
                                        <Swiper
                                            modules={[Controller, Thumbs, Autoplay]}
                                            onSwiper={setFirstSwiper}
                                            controller={{ control: secondSwiper }}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            speed={800}
                                            autoplay={
                                                {
                                                    delay: 3500,
                                                    disableOnInteraction: false
                                                }
                                            }
                                        >
                                            {item.grid.map((info, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <div className={Styles.gridapp_mob_each}>
                                                            <img src={info.img} alt="" />
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                </div>
                                <div className={Styles.gridapp_cols_each}>
                                    <div className={`${Styles.gridapp_info} gridapp_info`} data-aos="fade-in">

                                        <div className={Styles.gridapp_info_desk}>
                                            <Swiper
                                                modules={[Thumbs]}
                                                watchSlidesProgress
                                                onSwiper={setThumbsSwiper}
                                                breakpoints={
                                                    {
                                                        320: {
                                                            direction: 'horizontal',
                                                            slidesPerView: 1.35,
                                                            spaceBetween: 40,
                                                        },
                                                        900: {
                                                            direction: 'vertical',
                                                            slidesPerView: 3,
                                                            spaceBetween: 0,
                                                        }
                                                    }
                                                }
                                            >
                                                {item.grid.map((info, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <div className={`${Styles.gridapp_info_each} gridapp_info_each`}>
                                                                <div className={Styles['gridapp_info_each--icon']}>
                                                                    <Image src={info.icon} width={21} height={21} />
                                                                </div>
                                                                <div className={Styles['gridapp_info_each--text']}>
                                                                    {HTMLReactParser(info.text)}
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>

                                        <div className={Styles.gridapp_info_mob}>
                                            <Swiper
                                                modules={[Controller]}
                                                onSwiper={setSecondSwiper}
                                                controller={{ control: firstSwiper }}
                                                slideToClickedSlide={true}
                                                breakpoints={
                                                    {
                                                        320: {
                                                            direction: 'horizontal',
                                                            slidesPerView: 1.35,
                                                            spaceBetween: 40,
                                                        },
                                                        900: {
                                                            direction: 'vertical',
                                                            slidesPerView: 3,
                                                            spaceBetween: 0,
                                                        }
                                                    }
                                                }
                                            >
                                                {item.grid.map((info, index) => {
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <div className={`${Styles.gridapp_info_each}`}>
                                                                <div className={Styles['gridapp_info_each--icon']}>
                                                                    <Image src={info.icon} width={21} height={21} />
                                                                </div>
                                                                <div className={Styles['gridapp_info_each--text']}>
                                                                    {HTMLReactParser(info.text)}
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                })}
                                            </Swiper>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className={Styles.gridapp_stores} data-aos="fade-in">
                                {item.stores.map((info, index) => {
                                    return (
                                        <a href={info.url} key={index}><Image src={info.img} width={158} height={46} /></a>
                                    )
                                })}
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}


GridApp.defaultProps = {
    data: gridAppData,
}

GridApp.PropTypes = {
    data: PropTypes.array.isRequired,
}

export default memo(GridApp)