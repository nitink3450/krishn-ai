import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { A11y, Controller, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '../UseMediaQuery/UseMediaQuery';
import Styles from './Charging.module.scss';
import chargingData from "./chargingData.json";

const Charging = (props) => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    let isPageWide = useMediaQuery('(min-width: 900px)')
    let interleaveOffset = 0.85;

    isPageWide ? interleaveOffset = 0.85 : interleaveOffset = 0;
    const settingsParallax = {
        watchSlidesProgress: true,
        speed: 1000,
        spaceBetween: 0,
        onProgress:
            (swiper) => {
                var swiper = swiper;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".swiper_parallax_v1_each").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },
        onTouchStart:
            (swiper) => {
                var swiper = swiper;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
        onSetTransition:
            (swiper, speed) => {
                var swiper = swiper;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".swiper_parallax_v1_each").style.transition =
                        speed + "ms";
                }
            },
        className: "swiper_parallax_v1"
    };

    return (
        <div className={Styles.charging}>
            <div className='gen4_container'>
                <div className='gen4_title text_center white_text'>Charging</div>
                <div className={Styles.charging_swiper}>
                    <div className={Styles.charging_pagination_wrap}>
                        <div className={`swiper_parallax_v1_pagination ${Styles.charging_pagination}`} id='charging_pagination'></div>
                    </div>
                    {props.data.map((item, i) => {
                        return (
                            <div className={Styles.charging_swiper_wrap} key={i}>
                                <div className={Styles.charging_swiper_slide}>
                                    <Swiper
                                        {...settingsParallax}
                                        breakpoints={{
                                            300: {
                                                spaceBetween: 16,
                                                slidesPerView: 1.2,
                                            },
                                            920: {
                                                spaceBetween: 0,
                                                slidesPerView: 1,
                                            }
                                        }}
                                        onSwiper={setFirstSwiper}
                                        controller={{ control: secondSwiper }}
                                        modules={[Controller, Navigation, Pagination, Scrollbar, A11y]}
                                        pagination={{
                                            el: '#charging_pagination',
                                            clickable: true,
                                            renderBullet: (index, className) => {
                                                return (`<span class="${className}">${item.tabs[index].name}</span>`);
                                            },
                                            bulletActiveClass: `swiper-pagination-bullet-active ${Styles.charging_pagination_bullet_active}`,
                                            bulletClass: `${Styles.charging_pagination_bullet}`
                                        }}
                                    >
                                        {item.tabs.map((data, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <div className="swiper_parallax_v1_each">
                                                        <div className={Styles.charging_swiper_each}>
                                                            <div className={Styles.charging_swiper_each_img}>
                                                                <img src={data.url} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                                <div className={Styles.charging_swiper_slide}>
                                    <Swiper
                                        onSwiper={setSecondSwiper}
                                        controller={{ control: firstSwiper }}
                                        modules={[Controller, Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                                        style={{ width: '100%', height: '100%' }}
                                        breakpoints={{
                                            300: {
                                                spaceBetween: 16,
                                                slidesPerView: 1.2,
                                                effect: 'slide'
                                            },
                                            920: {
                                                spaceBetween: 0,
                                                slidesPerView: 1,
                                                effect: 'fade'
                                            }
                                        }}
                                    >

                                        {item.tabs.map((data, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    {({ isActive }) => (
                                                        <div className={`swiper_parallax_v1_each ${isActive ? Styles.charging_swiper_slide_active : ""}`} style={{ height: "100%" }}>
                                                            <div className={Styles.charging_swiper_each}>
                                                                <div className={Styles.charging_swiper_each_info}>
                                                                    <div className={Styles.charging_swiper_each_info_item}>
                                                                        <div className={Styles['charging_swiper_each_info--title']}>{data.title}</div>
                                                                        <div className={Styles['charging_swiper_each_info--text']}>{data.text}</div>
                                                                        <div className={Styles['charging_swiper_each_info--charge']}>
                                                                            <Image src={data.chargeIcon} width={12} height={12} alt='icon' />
                                                                            {data.chargeText}
                                                                        </div>
                                                                    </div>
                                                                    <div className={Styles.charging_swiper_each_info_item}>
                                                                        <div className={Styles['charging_swiper_each_info--link']}>
                                                                            Learn more <Image src='/images/gen4/arrow-right.svg' width={12} height={12} alt='icon' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                        )
                    })}
                    <div className={Styles.charge_learn_more}>
                        Learn more <Image src='/images/gen4/arrow-right-black.svg' width={12} height={12} alt='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

Charging.defaultProps = {
    data: chargingData,
};
Charging.PropTypes = {
    data: PropTypes.array.isRequired,
};

export default memo(Charging)