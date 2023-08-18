import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import VideoComp from '../../Common/VideoComp/VideoComp';
import s from './OneAppEverthing.module.scss';
import OneAppEverthingData from './OneAppEverthingData.json';

SwiperCore.use([Navigation]);

const OneAppEverthing = (props) => {
    const [activeTab, setActiveTab] = useState(0);
    const [swiper, setSwiper] = useState(null);
    // console.log('activeTab-', activeTab);

    const handleTabClick = (id) => {
        setActiveTab(id);
        swiper.slideTo(id);
        // console.log('clicked-', index);
    };

    const handleSwiperSlideChange = (swiper) => {
        setActiveTab(swiper.activeIndex);
        // console.log('swiped-', swiper);
        // console.log('swiped activeIndex-', swiper.activeIndex);
    };

    return (
        <>
            <section className={s.OAE_Sec}>
                {props.data &&
                    props.data.map((item, i) => {
                        return (
                            <>
                                <div className={s.OAE_deskTitle}>{HTMLReactParser(item.title)}</div>
                                <div className={s.OAE_mobTitle}>
                                    <p className={s.text_1}>
                                        {HTMLReactParser(item.title.split(' ').slice(0, 2).join(' '))}
                                    </p>
                                    <p className={s.text_2}>
                                        {HTMLReactParser(item.title.split(' ').slice(2).join(' '))}
                                    </p>
                                </div>
                                <div className={s.SliderWrapper}>
                                    <Swiper
                                        spaceBetween={100}
                                        slidesPerView={1}
                                        navigation={false}
                                        className={s.swiper_container}
                                        onSwiper={(swiper) => setSwiper(swiper)}
                                        onSlideChange={(swiper) => handleSwiperSlideChange(swiper)}
                                    >
                                        {item.tabs &&
                                            item.tabs.map((ele, i) => {
                                                return (
                                                    <>
                                                        <SwiperSlide key={ele.id} className={s.slide}>
                                                            <div className={s.SW_right}>
                                                                <div className={s.videoWrapper1}>
                                                                    <VideoComp
                                                                        position={{ left: '20px', bottom: '20px' }}
                                                                        // url="/images/Gen4/videos/ather.mp4"
                                                                        url={ele.videoLink}
                                                                        autoplay={true}
                                                                    />
                                                                    <div className={s.mobileWrapper}>
                                                                        <img
                                                                            src="./images/gen4/mobilePlaceholder.svg"
                                                                            alt=""
                                                                        />
                                                                    </div>
                                                                    <div className={s.tabTitle}>
                                                                        {HTMLReactParser(ele.title)}
                                                                    </div>
                                                                </div>
                                                                <div className={s.videoWrapper2}>
                                                                    <VideoComp
                                                                        // url="/images/Gen4/videos/ather.mp4"
                                                                        url={ele.videoLink}
                                                                        autoplay={true}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </>
                                                );
                                            })}
                                    </Swiper>

                                    <div className={s.SW_left}>
                                        <div className={s.tabs}>
                                            {item.tabs &&
                                                item.tabs.map((tab, i) => {
                                                    return (
                                                        <>
                                                            <div
                                                                onClick={() => handleTabClick(tab.id)}
                                                                className={`${s.mainSec} ${tab.id == activeTab ? s.currentActiveTab : ''
                                                                    } `}
                                                            >
                                                                <div className={s.ImageWrapper}>
                                                                    {HTMLReactParser(tab.svg)}
                                                                </div>
                                                                <div className={s.tabTitle}>
                                                                    {HTMLReactParser(tab.title)}
                                                                </div>
                                                            </div>
                                                        </>
                                                    );
                                                })}
                                        </div>

                                        <div className={s.btnSec}>
                                            <p>Download the Ather app</p>
                                            <div className={s.btns}>
                                                <Link href="#" passHref>
                                                    <a>
                                                        <img
                                                            src="./images/gen4/googlePlayStoreBtn.svg"
                                                            alt="googelPlayStore"
                                                        />
                                                    </a>
                                                </Link>
                                                <Link href="#" passHref>
                                                    <a>
                                                        <img
                                                            src="./images/gen4/appleStoreBtn.svg"
                                                            alt="appleStore"
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </section>
        </>
    );
};
OneAppEverthing.defaultProps = {
    data: OneAppEverthingData,
};
OneAppEverthing.PropTypes = {
    data: PropTypes.array.isRequired,
};

export default memo(OneAppEverthing);