import HTMLReactParser from 'html-react-parser';
import { useState } from 'react';
import VideoComp from '../../../Common/VideoComp/VideoComp';
import s from './Accordion.module.scss';

const Accordion = ({ list, compHeight }) => {
    // console.log(list);
    console.log(compHeight);

    const [activeIndex, setActiveIndex] = useState(0); // Set initial value to 0

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            {list && (
                <div className={s.accordion}>
                    {list.map((row, index) => (
                        <div key={index} className={s.item}>
                            <div
                                className={`${s.heading} ${activeIndex === index ? s.active : ''}`}
                                onClick={() => handleClick(index)}
                            >
                                <span>
                                    {HTMLReactParser(row.title)}
                                    {row.tradeMark && <sup className={s.tm}>TM</sup>}
                                </span>
                                <div className={s.arrow}>
                                    {activeIndex === index ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path
                                                d="M4.5 7.5H11.5C11.7812 7.5 12 7.28125 12 7C12 6.71875 11.7812 6.5 11.5 6.5H4.5C4.21875 6.5 4 6.71875 4 7C4 7.28125 4.21875 7.5 4.5 7.5Z"
                                                fill="#191919"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M7.5 11V8.5H5C4.71875 8.5 4.5 8.28125 4.5 8C4.5 7.75 4.71875 7.5 5 7.5H7.5V5C7.5 4.75 7.71875 4.5 8 4.5C8.25 4.5 8.5 4.75 8.5 5V7.5H11C11.25 7.5 11.5 7.75 11.5 8C11.5 8.28125 11.25 8.5 11 8.5H8.5V11C8.5 11.2812 8.25 11.5 8 11.5C7.71875 11.5 7.5 11.2812 7.5 11ZM16 8C16 12.4375 12.4062 16 8 16C3.5625 16 0 12.4375 0 8C0 3.59375 3.5625 0 8 0C12.4062 0 16 3.59375 16 8ZM8 1C4.125 1 1 4.15625 1 8C1 11.875 4.125 15 8 15C11.8438 15 15 11.875 15 8C15 4.15625 11.8438 1 8 1Z"
                                                fill="#191919"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div
                                className={`${s.content} ${activeIndex === index ? s.active : ''}`}
                            >
                                <div className={s.vidioWrapper} style={{ height: `${compHeight}` }}>
                                    {row.vidioLink && <VideoComp url={row.vidioLink} autoplay={true} />}
                                </div>
                                <span className={s.heading1}>
                                    {HTMLReactParser(row.title)}
                                    {row.tradeMark && <sup className={s.tm}>TM</sup>}
                                </span>
                                <p className={s.description}>{HTMLReactParser(row.desc)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
VideoComp.defaultProps = {
    height: '280px',
};

export default Accordion;