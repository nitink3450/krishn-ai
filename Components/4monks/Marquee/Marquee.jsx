import HTMLReactParser from 'html-react-parser';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import Marquee from 'react-fast-marquee';
import s from './WhatsNew.module.scss';
import WhatsNewData from './WhatsNewData.json';
const WhatsNew = (props) => {
    return (
        <>
            <section className={s.WN_Sec}>
                {props.data &&
                    props.data.map((item, i) => {
                        return (
                            <>
                                <div className={s.quote}>
                                    <p style={{ color: '#e6f4e7' }}>More Power.</p>
                                    <p>Better Perfomance. </p>
                                    <p>Brilliant Brain. </p>
                                </div>
                                <div className={s.marquee_1}>
                                    <span className={s.shadow}></span>
                                    <Marquee
                                        style={{
                                            overflow: 'hidden',
                                        }}
                                        gradient={false}
                                    >
                                        <span>&nbsp; {HTMLReactParser(item.title)} &nbsp; 🎉</span>
                                        <span>&nbsp; {HTMLReactParser(item.title)} &nbsp; 🎉</span>
                                        <span>&nbsp; {HTMLReactParser(item.title)} &nbsp; 🎉</span>
                                        <span>&nbsp; What’s new &nbsp; 🎉</span>
                                    </Marquee>
                                </div>
                                <div className={s.WN_Grid}>
                                    <div className={s.WN_TopGrid}>
                                        {item.component_1 &&
                                            item.component_1.map((comp, i) => {
                                                return (
                                                    <>
                                                        <div className={s.TG_Left}>
                                                            <div className={s.head_Sec}>
                                                                <span className={s.iconWrapper}>
                                                                    <img src={comp.icon} alt={`icon-${i}`} />
                                                                </span>
                                                                <span>{HTMLReactParser(comp.title)}</span>
                                                            </div>
                                                            <div className={s.ranges}>
                                                                {comp.ranges &&
                                                                    comp.ranges.map((ele, i) => {
                                                                        return (
                                                                            <div key={ele.id} className={s.range}>
                                                                                <span className={s.km}>
                                                                                    {HTMLReactParser(ele.range)}
                                                                                </span>
                                                                                <span className={s.rangetext}>
                                                                                    {HTMLReactParser(ele.rangeName)}
                                                                                    {ele.registered && <sup>&#174;</sup>}
                                                                                </span>
                                                                            </div>
                                                                        );
                                                                    })}
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        {item.component_2 &&
                                            item.component_2.map((comp, i) => {
                                                return (
                                                    <>
                                                        <div className={s.TG_Right}>
                                                            <div className={s.head_Sec}>
                                                                <span className={s.iconWrapper}>
                                                                    <img src={comp.icon} alt={`icon-${i}`} />
                                                                </span>
                                                                <span>{HTMLReactParser(comp.title)}</span>
                                                            </div>
                                                            <div className={s.features}>
                                                                {comp.features &&
                                                                    comp.features.map((fea, i) => {
                                                                        return (
                                                                            <>
                                                                                <div key={fea.id} className={s.featureBox}>
                                                                                    <p className={s.featureTitle}>
                                                                                        {HTMLReactParser(fea.feature)}
                                                                                    </p>
                                                                                    <div className={s.imgWrapper}>
                                                                                        <img src={fea.img} alt={`img-${i}`} />
                                                                                    </div>
                                                                                </div>
                                                                            </>
                                                                        );
                                                                    })}
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            })}
                                    </div>
                                    <div className={s.WN_BottomGrid}>
                                        {item.component_3 &&
                                            item.component_3.map((comp, i) => {
                                                return (
                                                    <>
                                                        <div className={s.BG_Left}>
                                                            <img
                                                                className={s.background}
                                                                src="./images/gen4/stackBgTransperent.svg"
                                                                alt=""
                                                            />
                                                            <div className={s.box}>
                                                                <span className={s.logoWrapper}>
                                                                    <img src={comp.icon} alt="logo" />
                                                                </span>
                                                                <p className={s.desc}>
                                                                    {HTMLReactParser(comp.desc)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className={s.BG_Right}>
                                                            {comp.features &&
                                                                comp.features.map((ele, i) => {
                                                                    return (
                                                                        <div key={i} className={s.featureBox2}>
                                                                            <span
                                                                                className={s.iconWrapper}
                                                                                style={{
                                                                                    backgroundColor: `${ele.background}`,
                                                                                }}
                                                                            >
                                                                                <img src={ele.img} alt={`icon-${ele.id}`} />
                                                                            </span>
                                                                            <p className={s.feature}>
                                                                                {HTMLReactParser(ele.feature)}
                                                                            </p>
                                                                        </div>
                                                                    );
                                                                })}
                                                        </div>
                                                    </>
                                                );
                                            })}
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </section>
        </>
    );
};
WhatsNew.defaultProps = {
    data: WhatsNewData,
};
WhatsNew.PropTypes = {
    data: PropTypes.array.isRequired,
};

export default memo(WhatsNew);