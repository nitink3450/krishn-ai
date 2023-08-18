import HTMLReactParser from 'html-react-parser';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState, memo } from 'react';
import s from './ColorSelector.module.scss';
import ColorSelectorData from './ColorSelectorData.json';
const ColorSelector = (props) => {
    const [selectedColor, setSelectedColor] = useState('#000000');
    const [selectedColorName, setSelectedColorName] = useState('Cosmic Black');
    const [selectedImg, setSelectedImg] = useState('/Images/gen4/Ather450xImg.svg');

    // console.log('selectedColor:-', selectedColor);
    // console.log('selectedColorName:-', selectedColorName);
    // console.log('selectedImg:-', selectedImg);

    function handleColorChange(e) {
        const colorId = e.target.id;
        const colorCode = e.target.value;
        setSelectedColor(colorCode);
        // console.log('colorCode', colorCode);

        props.data.forEach((item) => {
            const color = item.colorList.find((c) => c.id == colorId);
            // console.log(color);
            if (color && color.colorCode == colorCode) {
                setSelectedColorName(color.colorName);
                setSelectedImg(color.FullImg);
            }
        });
    }

    return (
        <>
            <section className={s.CS_Sec}>
                <div className={s.deskImgWrapper}>
                    <img src={selectedImg} alt={`Ather: ${selectedColorName}`} />
                </div>
                {/* <div className={s.searchIcon}>
          <img src="/Images/gen4/searchPlus.svg" alt="search-icon" />
        </div> */}
                {props.data &&
                    props.data.map((item, i) => {
                        return (
                            <>
                                <div className={s.CS_head}>
                                    <div className={s.CS_title}>{HTMLReactParser(item.title)}</div>
                                    <p className={s.CS_desc}>{HTMLReactParser(item.desc)}</p>
                                </div>
                                <div key={item.id} className={s.ColorPickBox}>
                                    <div className={s.topSec}>
                                        <div className={s.colorName}>{selectedColorName}</div>
                                        <ul className={s.simpleColors}>
                                            {item.colorList &&
                                                item.colorList.map((color, i) => {
                                                    return (
                                                        <li key={color.id}>
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    name="colors"
                                                                    id={color.id}
                                                                    value={color.colorCode}
                                                                    // checked={selectedColor === color.colorCode}
                                                                    checked={
                                                                        selectedColor === color.colorCode ||
                                                                        (i === 0 && selectedColor === '#000000')
                                                                    }
                                                                    onChange={handleColorChange}
                                                                />
                                                                <span
                                                                    style={{ backgroundColor: `${color.colorCode}` }}
                                                                    className={
                                                                        selectedColor === color.colorCode ? s.active : ''
                                                                    }
                                                                >
                                                                    <svg
                                                                        width="20"
                                                                        height="20"
                                                                        viewBox="0 0 20 20"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            d="M16.6875 5.3125C17.0938 5.6875 17.0938 6.34375 16.6875 6.71875L8.6875 14.7188C8.3125 15.125 7.65625 15.125 7.28125 14.7188L3.28125 10.7188C2.875 10.3438 2.875 9.6875 3.28125 9.3125C3.65625 8.90625 4.3125 8.90625 4.6875 9.3125L7.96875 12.5938L15.2812 5.3125C15.6562 4.90625 16.3125 4.90625 16.6875 5.3125Z"
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                            </label>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                        {/* {selectedColor && (
                      <div>
                        <p style={{marginBottom:"10px"}}>selectedColor: {selectedColor}</p>
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="50"
                            height="50"
                            rx="25" ry="25"
                            fill={selectedColor}
                          />
                        </svg>
                      </div>
                    )} */}
                                    </div>
                                    <div className={s.middleSec}>
                                        <div className={s.M_topBox}>
                                            <img src={selectedImg} alt={`Ather: ${selectedColorName}`} />
                                        </div>
                                        <div className={s.M_bottomBox}>
                                            <div className={s.MB_LeftBox}>
                                                <img
                                                    src="/Images/gen4/Ather450xImg2Front.svg"
                                                    alt="Ather-Front"
                                                />
                                            </div>
                                            <div className={s.MB_RightBox}>
                                                <img
                                                    src="/Images/gen4/Ather450xImg2Back.svg"
                                                    alt="Ather-Back"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={s.BottomSec}>
                                        <ul className={s.premiumColors}>
                                            {item.premium450x &&
                                                item.premium450x.map((pColor, i) => {
                                                    return (
                                                        <li
                                                            key={pColor.id}
                                                            style={{ backgroundColor: `${pColor.colorCode}` }}
                                                        >
                                                            <img src="/Images/gen4/greenStar.svg" alt="" />
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                        <div className={s.descBox}>
                                            <p>
                                                *Colours True red & Lunar Grey are available only for Ather
                                                450X
                                            </p>
                                            <Link href="#" passHref>
                                                <a>Explore the 450X</a>
                                            </Link>
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
ColorSelector.defaultProps = {
    data: ColorSelectorData,
};
ColorSelector.PropTypes = {
    data: PropTypes.array.isRequired,
};
export default memo(ColorSelector);