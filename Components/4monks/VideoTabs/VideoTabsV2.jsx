import HTMLReactParser from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { A11y, Autoplay, Controller, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '../UseMediaQuery/UseMediaQuery';
import VideoComp from '../VideoComp/VideoComp';
import Styles from './VideoTabs.module.scss';
import videoTabsDataV2 from './videoTabsDataV2.json';

const VideoTabsV2 = (props) => {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    const [isDuration, setIsDuration] = useState(null)
    const [isProgress, setIsProgress] = useState(null)

    const videoDuration = (duration) => {
        setIsDuration(duration);
    }
    const videoProgress = (progress) => {
        setIsProgress(progress);
    }

    let isPageWide = useMediaQuery('(min-width: 900px)')
    let interleaveOffset = 0.5;

    isPageWide ? interleaveOffset = 0.5 : interleaveOffset = 0;
    const settingsParallax = {
        watchSlidesProgress: true,
        speed: 1000,
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
        <div className={Styles.videotabsv2_wrap}>
            <div className='gen4_container'>
                <div className='space_50'></div>
                <div className='gen4_title text_center mb_20 white_text_mob'>Sense. Enhanced</div>
                <div className='gen4_subtext m_auto text_center white_grey_mob'>Lorem ipsum dolor sit amet consectetur. Fames consequat nulla.</div>
                {props.data.map((item, i) => {
                    return (
                        <div className={`${Styles.videotabs} ${Styles.videotabsv2} videotabs videotabsv2`} key={i}>
                            <Swiper
                                {...settingsParallax}
                                breakpoints={{
                                    300: {
                                        // spaceBetween: 16,
                                        // slidesPerView: 1.2,
                                    },
                                    920: {
                                        spaceBetween: 0,
                                        slidesPerView: 1,
                                    }
                                }}
                                onSwiper={setFirstSwiper}
                                controller={{ control: secondSwiper }}
                                modules={[Controller, Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                autoplay={{
                                    delay: isDuration ? isDuration * 1000 : 30000,
                                    disableOnInteraction: false
                                }}
                                pagination={{
                                    el: '.swiper_parallax_v1_pagination',
                                    clickable: true,
                                    renderBullet: (index, className) => {
                                        return (`<span class="${className}"><span><span class="${Styles.pagination_label}">${item.tabs[index].label}</span>${item.tabs[index].title}</span></span>`);
                                    },
                                    bulletActiveClass: `swiper-pagination-bullet-active`,
                                }}
                            >

                                {item.tabs.map((data, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className="swiper_parallax_v1_each">
                                                <VideoComp
                                                    url={data.url}
                                                    autoplay={true}
                                                    videoDuration={videoDuration}
                                                    videoProgress={videoProgress}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>

                            <div className='swiper_parallax_v1_pagination' style={{ '--width': `${isProgress}%` }}></div>

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
                                modules={[Controller, EffectFade]}
                                onSwiper={setSecondSwiper}
                                controller={{ control: [firstSwiper] }}
                            >

                                {item.tabs.map((data, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className='swiper_parallax_v1_each'>
                                                <div className={Styles.videotabs_each}>
                                                    <div className={Styles['videotabs_each--title']}>
                                                        {HTMLReactParser(data.title)}
                                                    </div>
                                                    <div className={Styles['videotabs_each--text']}>
                                                        {HTMLReactParser(data.desc)}
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    )
                })}

                <div className='space_100'></div>
            </div>
        </div>
    )
}


VideoTabsV2.defaultProps = {
    data: videoTabsDataV2,
};
VideoTabsV2.PropTypes = {
    data: PropTypes.array.isRequired,
};

export default memo(VideoTabsV2)