import { Col, Drawer, Row, Space } from 'antd';
import Image from 'next/image';
import React, { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import useWindowPosition from '../hooks/useWindowPosition';
import FaqSection from '../Faqs/FaqSection';
import style from "./ChargeHome.module.scss";
// Import Swiper styles
import AOS from 'aos';
import 'swiper/css';
// import BannerContent from '../BannerContent/BannerContent';
import faqDataFastCharger from '../Faqs/faqDataFastCharger.json';
import faqDataNeighbourhood from '../Faqs/faqDataNeighbourhood.json';
import TabsContent from '../TabsContent/TabsContent';
import TechnicalSpec from '../TechnicalSpec/TechnicalSpec';
import WriteUs from '../WriteUs';
import Ticker from './Ticker';


const ChargeHome = ({ props, ...rest }) => {

    let swiperAutoplayDelay = 2000
    const progressRef = useRef(null);
    const swiperTextRotateRef = useRef(null);
    const swipeImagesRef = useRef(null);
    const [activeClass, setActiveClass] = useState('active_1');

    const [isDrawerOne, setIsDrawerOne] = useState(false);
    const [isDrawerTwo, setIsDrawerTwo] = useState(false);

    const toggleDrawerOne = () => {
        setIsDrawerOne(!isDrawerOne);
        AOS.refreshHard();
    };
    const toggleDrawerTwo = () => {
        setIsDrawerTwo(!isDrawerTwo);
    };


    // section refs
    const sec1_ref = useRef(null)
    const sec2_ref = useRef(null)
    const sec3_ref = useRef(null)
    const sec_end_ref = useRef(null)

    const windowPos = useWindowPosition();

    const scrollSec1 = (e) => {
        e.preventDefault();
        window.scrollTo({ behavior: 'smooth', top: sec1_ref.current.offsetTop - 120 })
    }
    const scrollSec2 = (e) => {
        e.preventDefault();
        window.scrollTo({ behavior: 'smooth', top: sec2_ref.current.offsetTop - 120 })
    }
    const scrollSec3 = (e) => {
        e.preventDefault();
        window.scrollTo({ behavior: 'smooth', top: sec3_ref.current.offsetTop - 120 })
    }

    useLayoutEffect(() => {

        if (sec1_ref.current.offsetTop - 120 <= windowPos && sec2_ref.current.offsetTop - 120 > windowPos) {
            setActiveClass('active_1')
        } else if (sec2_ref.current.offsetTop - 120 <= windowPos && sec3_ref.current.offsetTop - 120 > windowPos) {
            setActiveClass('active_2')
        } else if (sec3_ref.current.offsetTop - 120 <= windowPos) {
            setActiveClass('active_3')
        }

    }, [windowPos])

    function move() {
        var width = 0;
        var autoplayTime = swiperAutoplayDelay / 100;
        var id = setInterval(frame, autoplayTime);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                progressRef.current.style.width = width + '%';
            }
        }
    }

    useEffect(() => {
        let scrollpos = window.scrollY

        const header = document.querySelector(`.${style.chargeHome_wrapper_header_holder}`)
        const scrollChange = 920


        const add_class_on_scroll = () => header.classList.add(`${style.stikcy_head}`);
        const remove_class_on_scroll = () => header.classList.remove(`${style.stikcy_head}`);

        window.addEventListener('scroll', function () {
            scrollpos = window.scrollY;

            if (scrollpos >= scrollChange) { add_class_on_scroll() }
            else { remove_class_on_scroll() }


        })
    })

    return (
        <>
            <section className={style.chargeHome}>
                <div className={style.chargeHome_wrapper}>
                    <div className={style.chargeHome_wrapper_header} data-aos="fade-up">
                        <div className={style.chargeHome_wrapper_header_holder}>
                            <div data-linkactive={activeClass} className={`${style.chargeHome_wrapper_header_holder_inner}`}>
                                <a href="" onClick={scrollSec1}>Personal charging</a>
                                <a href="" onClick={scrollSec2}>Neighbourhood charging</a>
                                <a href="" onClick={scrollSec3}>Public fast charging</a>
                            </div>
                        </div>
                    </div>
                    <div ref={sec1_ref} id="sec-1" className={style.chargeHome_wrapper_sec}>
                        <div className={style.chargeHome_wrapper_content}>
                            <div className={style.chargeHome_wrapper_content_holder}>
                                <Row gutter={50} justify={'center'}>
                                    <Col xs={24} md={12}>
                                        <h3 className={style['chargeHome_wrapper--title']} data-aos="fade-in">Charge <br />at Home</h3>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <p className={style['chargeHome_wrapper--desc']} data-aos="fade-in">Prep yourself for the day ahead. Plug in before you sleep, wake up to a fully charged Ather. Our charging solution fits every home, designed for both indoor and outdoor use.</p>
                                        <div className={style.chargeHome_wrapper_values} data-aos="fade-in">

                                            <h5>0-<Ticker className="count" end={80} suffix="%" /></h5>
                                            <h6 className={style['chargeHome_wrapper_values--label']}>in <Ticker className="count" end={4} suffix="" />hr <Ticker className="count" end={30} suffix="" /> mins</h6>
                                        </div>
                                    </Col>
                                    <Col span={24}>
                                        <div className={style.chargeHome_wrapper_type}>
                                            <Row gutter={20} justify={'center'}>
                                                <Col md={12}>
                                                    <div className={style.chargeHome_wrapper_type_card}>
                                                        <div className={style['chargeHome_wrapper_type_card--img']} data-aos="fade-up">
                                                            <picture>
                                                                <img className={"ch_global_img"} src={'/images/gridv2/home-charging.png'} alt="Ather Dot" />
                                                            </picture>
                                                        </div>
                                                        <div className={style['chargeHome_wrapper_type_card--text']} data-aos="fade-in">
                                                            <Row gutter={10}>
                                                                <Col span={12}>
                                                                    <h4>Ather Dot</h4>
                                                                </Col>
                                                                <Col span={12}>
                                                                    <p>Charge your scooter where it's parked with our fixed personal chargers.</p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className={style.chargeHome_wrapper_type_card}>
                                                        <div className={style['chargeHome_wrapper_type_card--img']} data-aos="fade-up">
                                                            <picture>
                                                                <img className={"ch_global_img"} src={'/images/gridv2/portable-charger.png'} alt="Ather Dot" />
                                                            </picture>
                                                        </div>
                                                        <div className={style['chargeHome_wrapper_type_card--text']} data-aos="fade-in">
                                                            <Row gutter={10}>
                                                                <Col span={12}>
                                                                    <h4>Ather Portable Charger</h4>
                                                                </Col>
                                                                <Col span={12}>
                                                                    <p>Fits into any 5 Amp socket when you need it and into the boot when you don't.</p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                        </div>
                    </div>

                    <div ref={sec2_ref} id="sec-2" className={style.chargeHome_wrapper_sec_2}>
                        <div className={style.chargeHome_wrapper_content}>
                            <div className={style.chargeHome_wrapper_slider}>
                                <div className={style.chargeHome_wrapper_slider_top}>
                                    <Row gutter={50} justify={'center'} align={'middle'}>
                                        <Col xs={24} md={12}>
                                            <h3 className={style['chargeHome_wrapper_slider_top--title']} data-aos="fade-in">Charge in <br />your

                                                <span data-aos="fade-in">
                                                    <Swiper
                                                        height={80}
                                                        modules={[Autoplay]}
                                                        ref={swiperTextRotateRef}
                                                        loop={true}
                                                        spaceBetween={0}
                                                        slidesPerView={1}
                                                        allowTouchMove={false}
                                                        direction='vertical'
                                                        autoplay={{
                                                            delay: swiperAutoplayDelay,
                                                        }}
                                                    >
                                                        <SwiperSlide>
                                                            <div> apartment</div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div> office</div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div> University</div>
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </span>
                                            </h3>
                                        </Col>
                                        <Col className='ch_global_xs-hidden' md={12}>
                                            <p className={style['chargeHome_wrapper_slider_top--desc']} data-aos="fade-in">True convenience is getting what you need, where you need it! With Neighbourhood Chargers placed at the places you frequent, your Ather will always be ready for any change in plans. </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className={style.chargeHome_wrapper_slider_middle}>
                                    <div className={style.chargeHome_wrapper_slider_middle_holder}>
                                        <Swiper
                                            ref={swipeImagesRef}
                                            modules={[Autoplay]}
                                            spaceBetween={0}
                                            slidesPerView={1}
                                            allowTouchMove={false}
                                            loop={true}
                                            // direction='vertical'
                                            autoplay={{
                                                delay: swiperAutoplayDelay,
                                            }}
                                            onProgress={move}
                                            style={{ borderRadius: '8px' }}
                                            data-aos="fade-in"
                                        >
                                            <SwiperSlide>
                                                <div>
                                                    <picture>
                                                        <source media='(max-width:767px)' srcSet={'/images/gridv2/neighbourhood-charger-mob.png'} />
                                                        <source media='(min-width:768px)' srcSet={'/images/gridv2/apartment.png'} />
                                                        <img className={"ch_global_img"} src={'/images/gridv2/apartment.png'} alt="Charging at office" />
                                                    </picture>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <picture>
                                                        <source media='(max-width:767px)' srcSet={'/images/gridv2/office-mob.png'} />
                                                        <source media='(min-width:768px)' srcSet={'/images/gridv2/office.png'} />
                                                        <img className={"ch_global_img"} src={'/images/gridv2/office.png'} alt="Charging at office" />
                                                    </picture>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div>
                                                    <picture>
                                                        <source media='(max-width:767px)' srcSet={'/images/gridv2/neighbourhood-charger-mob.png'} />
                                                        <source media='(min-width:768px)' srcSet={'/images/gridv2/university.png'} />
                                                        <img className={"ch_global_img"} src={'/images/gridv2/university.png'} alt="Charging at office" />
                                                    </picture>
                                                </div>
                                            </SwiperSlide>
                                            <div ref={progressRef} className={style['swiper-hero-progress']}></div>
                                        </Swiper>

                                        {/* charger show */}
                                        <div className={style.chargeHome_wrapper_slider_middle_charger}>
                                            <Row gutter={16} justify={'middle'} align={'middle'}>
                                                <Col span={24} className='ch_global_xs-visible'>
                                                    <p className={style['chargeHome_wrapper_slider_top--desc']} data-aos="fade-in">True convenience is getting what you need, where you need it! With Neighbourhood Chargers placed at the places you frequent, your Ather will always be ready for any change in plans. </p>
                                                </Col>
                                                <Col xs={10} md={5}>
                                                    <div className={style['chargeHome_wrapper_slider_middle_charger--img']} data-aos="fade-in">
                                                        <img className={"ch_global_img"} src={'/images/gridv2/charger-1.png'} alt="NH Charger" />
                                                    </div>
                                                </Col>
                                                <Col xs={14} md={7}>
                                                    <h4 data-aos="fade-in">Ather <br />Neighbourhood <br />Charger</h4>
                                                </Col>
                                                <Col xs={24} md={12}>
                                                    <p data-aos="fade-in">Bring our charging infrastructure into your apartment, university or workplace and always be ready for your next ride.</p>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className={style.chargeHome_wrapper_slider_middle_counts}>
                                            <Row gutter={16} align={'middle'}>
                                                <Col xs={0} md={12}></Col>
                                                <Col xs={24} md={12}>
                                                    <h3 data-aos="fade-in">
                                                        <Ticker className="count" end={100} suffix="+" />
                                                    </h3>

                                                    <p data-aos="fade-in">Installations <br />done so far.</p>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className={style.chargeHome_wrapper_slider_middle_buttons}>
                                            <Row gutter={16} align={'middle'}>
                                                <Col xs={0} md={12}></Col>
                                                <Col xs={24} md={12}>
                                                    <Space size={60}>
                                                        <button className={style['chargeHome_wrapper_slider_middle_buttons--solid']} data-aos="fade-in">I want to host <AiOutlineArrowRight /></button>
                                                        <button className={style['chargeHome_wrapper_slider_middle_buttons--outline']} data-aos="fade-in" onClick={toggleDrawerOne}>Tell me more <AiOutlineArrowRight /></button>
                                                    </Space>
                                                </Col>
                                            </Row>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={sec3_ref} id="sec-3" className={style.chargeHome_wrapper_sec_3}>
                        <div className={style.chargeHome_wrapper_content}>
                            <div className={style.chargeHome_wrapper_sec_3_top}>
                                <div className={style.chargeHome_wrapper_content_holder}>
                                    <div className={style.charger_ongo}>
                                        <Row gutter={0} justify={'center'}>
                                            <Col xs={24} md={12}>
                                                <h3 className={style['chargeHome_wrapper_slider_top--title']} data-aos="fade-in">Charge <br />on the go</h3>
                                            </Col>
                                            <Col xs={24} md={12}>
                                                <p className={style['chargeHome_wrapper_slider_top--desc']} data-aos="fade-in">With 1200+ public chargers and counting, the nation's largest 2-wheeler fast charging network is ready to give you 15km worth of charge in just 10 minutes, no matter where you are.</p>
                                                <p className={style['chargeHome_wrapper_slider_top--desc']} data-aos="fade-in">Just plug-in and grab your choice of brew - your Ather will be charged and ready for you.</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                            <div className={style.chargeHome_wrapper_sec_3_middle}>
                                <div className={style.chargeHome_wrapper_sec_3_middle_holder}>
                                    <div className={style.chargeHome_wrapper_sec_3_middle_network}>
                                        <Row>
                                            <Col xs={24} md={10} lg={8}>
                                                <h4 data-aos="fade-in">India’s largest 2 wheeler fast charging network</h4>
                                                <div className={style['chargeHome_wrapper_sec_3_middle_network--bottom']} data-aos="fade-in">
                                                    <h6><Ticker className="count" end={1500} suffix="+" /></h6>
                                                    <p>chargers in 80+ cities</p>
                                                </div>
                                            </Col>
                                            <Col xs={24} md={14} lg={16}>
                                                <div data-aos="fade-up">
                                                    <img className={"ch_global_img"} src={'/images/gridv2/ch-map.png'} alt="map" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className={style.chargeHome_wrapper_sec_3_middle_charger_poster} data-aos="fade-up">
                                        <picture>
                                            <source media='(max-width:767px)' srcSet={'/images/gridv2/public-charger-mob.png'} />
                                            <source media='(min-width:768px)' srcSet={'/images/gridv2/public-charger-desk.png'} />
                                            <img className={"ch_global_img"} src={'/images/gridv2/public-charger-desk.png'} alt="Charging at office" />
                                        </picture>
                                    </div>
                                    <div className={style.chargeHome_wrapper_sec_3_middle_charger}>
                                        <Row gutter={16} justify={'top'} align={'middle'} className='charge_middle_info'>
                                            <Col md={5}>
                                                <div className={style['chargeHome_wrapper_sec_3_middle_charger--img']}>
                                                    <img className={"ch_global_img charger"} src={'/images/gridv2/charger-2.png'} alt="NH Charger" />
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <h4 data-aos="fade-in">Ather Public Fast Chargers</h4>
                                            </Col>
                                            <Col md={12}>
                                                <p data-aos="fade-in">They're fast, reliable and all over Indian roads - just like our scooters, in a way!</p>
                                            </Col>
                                        </Row>
                                        <div className={style.chargeHome_wrapper_slider_middle_counts}>
                                            <Row gutter={16} align={'middle'}>
                                                <Col xs={0} md={12}></Col>
                                                <Col xs={24} md={12}>
                                                    <h3 data-aos="fade-in">
                                                        <Ticker className="count" end={15} suffix="km" /> / <Ticker className="count" end={10} suffix="min" />
                                                    </h3>
                                                    <br />
                                                    <p data-aos="fade-in">Charging speed</p>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className={style.chargeHome_wrapper_slider_middle_buttons}>
                                            <Row gutter={16} align={'middle'}>
                                                <Col xs={0} md={12}>
                                                </Col>
                                                <Col xs={24} md={12}>
                                                    <Space size={60}>
                                                        <button className={style['chargeHome_wrapper_slider_middle_buttons--solid']} data-aos="fade-in">Become a host <AiOutlineArrowRight /></button>
                                                        <button className={style['chargeHome_wrapper_slider_middle_buttons--outline']} data-aos="fade-in" onClick={toggleDrawerTwo}>Tell me more <AiOutlineArrowRight /></button>
                                                    </Space>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={sec_end_ref}></div>
                </div>
            </section>

            {/* Drawer one */}
            <Drawer title="Ather Neighbourhood Charger" className='gridv2_drawer dark_header' closeIcon={<Image src='/images/gridv2/arrow-left-white.svg' width={12} height={14} />} onClose={toggleDrawerOne} width={'100vw'} zIndex={999999} placement="right" open={isDrawerOne}>
                <TabsContent />
                <TechnicalSpec />
                <FaqSection data={faqDataNeighbourhood} />
                <WriteUs
                    title={'Join the EV revolution. <br/>Be a host.'}
                    writeto={"Bring the Ather Neighbourhood Charger to your apartment, office or University. Give us the details of the space and we'll have it set up for you in a flash!"}
                    buttontxt={'Sign me up'}
                    buttonurl={'#'}
                />
            </Drawer>

            {/* Drawer two */}
            <Drawer title="Public Fast Charger" className='gridv2_drawer' closeIcon={<Image src='/images/gridv2/arrow-left.svg' width={12} height={14} />} onClose={toggleDrawerTwo} width={'100vw'} zIndex={999999} placement="right" open={isDrawerTwo}>
                {/* <BannerContent /> */}
                <FaqSection data={faqDataFastCharger} />
                <WriteUs
                    title={'Great power. <br/>No responsibility.'}
                    writeto={'Got a business space? Become an Ather Public Fast Charging host and get reimbursed for electricity costs incurred. And the footfalls from thousands of EV customers? Consider that a perk'}
                    buttontxt={'Become a host'}
                    buttonurl={'mailto:athergrid@atherenergy.com'}
                />
            </Drawer>
        </>
    )
}

// Banner.defaultProps = {
//     data: chargeHomeData,
// }

// Banner.PropTypes = {
//     data: PropTypes.array.isRequired,
// }

export default memo(ChargeHome);