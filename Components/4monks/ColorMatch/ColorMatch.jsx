import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { A11y, Controller, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Styles from './ColorMatch.module.scss';
import colorMatchData from './colorMatchData.json';


const ColorMatch = (props) => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    const interleaveOffset = 0.85;
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

    useEffect(() => {
        document.querySelectorAll(`.${Styles.circle}`).forEach(function (color) {
            color.addEventListener('click', function () {
                document.getElementById('color_match_name').innerHTML = this.getAttribute('data-colorname');
            })
        })
    })

    return (
        <div className='gen4_white_bg'>
            <div className='gen4_container'>
                <div className={Styles.color_match}>
                    <div className='gen4_title text_center'>Meet your match</div>
                    {props.data?.map((item, i) => {
                        return (
                            <div className={Styles.color_match_swiper} key={i}>
                                <div className={Styles.color_match_swiper_each}>
                                    <div id='color_match_name' className={Styles.color_match_name}>
                                        {item.colorNames[0]}
                                    </div>
                                    <div className={Styles.color_match_swiper_pagination}></div>
                                    <Swiper
                                        {...settingsParallax}
                                        modules={[Controller, Navigation, Pagination, Scrollbar, A11y]}
                                        onSwiper={setFirstSwiper}
                                        controller={{ control: secondSwiper }}
                                        pagination={{
                                            el: `.${Styles.color_match_swiper_pagination}`,
                                            clickable: true,
                                            renderBullet: (index, className) => {
                                                return (`<span style="background:${item.colors[index]}" class="${Styles.circle} ${className}" data-colorname="${item.colorNames[index]}"></span>`);
                                            },
                                            bulletActiveClass: `swiper-pagination-bullet-active ${Styles['active']}`
                                        }}
                                    >

                                        {item.renderImageFirst?.map((data, i) => {
                                            return (
                                                <SwiperSlide key={i}>
                                                    <div className='swiper_parallax_v1_each'>
                                                        <div className={Styles.color_match_swiper_each_slide}>
                                                            <picture>
                                                                <source media="(min-width:768px)" srcSet={data.imgDesk} />
                                                                <source media="(max-width:767px)" srcSet={data.imgMob} />
                                                                <img src={data.imgDesk} className={Styles['color_match_swiper_each_slide_img']} alt="img" />
                                                            </picture>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}

                                    </Swiper>
                                </div>


                                <div className={Styles.color_match_swiper_wrap}>
                                    <div className={`${Styles.color_match_swiper_each} ${Styles.desktop_hide}`}>
                                        <Swiper
                                            {...settingsParallax}
                                            modules={[Controller, EffectFade]}
                                            onSwiper={setFirstSwiper}
                                            controller={{ control: [secondSwiper] }}
                                        >
                                            {item.renderImageMiddle?.map((data, i) => {
                                                return (
                                                    <SwiperSlide key={i}>
                                                        <div className='swiper_parallax_v1_each'>
                                                            <div className={Styles.color_match_swiper_each_slide}>
                                                                <img src={data.img} className={Styles['color_match_swiper_each_slide_img']} alt="im2" />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>
                                    <div className={Styles.color_match_swiper_each}>
                                        <Swiper
                                            {...settingsParallax}
                                            modules={[Controller, EffectFade]}
                                            onSwiper={setSecondSwiper}
                                            controller={{ control: [firstSwiper] }}
                                        >

                                            {item.renderImageLast?.map((data, i) => {
                                                return (
                                                    <SwiperSlide key={i}>
                                                        {({ isVisible }) => (
                                                            <div className='swiper_parallax_v1_each'>
                                                                <div className={`${Styles.color_match_swiper_each_slide} ${isVisible ? Styles.active : null}`}>
                                                                    <picture>
                                                                        <source media="(min-width:768px)" srcSet={data.imgDesk} />
                                                                        <source media="(max-width:767px)" srcSet={data.imgMob} />
                                                                        <img src={data.imgDesk} className={Styles['color_match_swiper_each_slide_img--smal']} alt="img3" />
                                                                    </picture>
                                                                    <div className={Styles.color_match_swiper_each_slide_info}>
                                                                        <div className={Styles['color_match_swiper_each_slide_info--title']}>
                                                                            <span>{data.title}</span>
                                                                        </div>
                                                                        <div className={Styles['color_match_swiper_each_slide_info--text']}>
                                                                            <span>{data.text}</span>
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
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

ColorMatch.defaultProps = {
    data: colorMatchData,
};
ColorMatch.PropTypes = {
    data: PropTypes.array.isRequired,
};

export default memo(ColorMatch)