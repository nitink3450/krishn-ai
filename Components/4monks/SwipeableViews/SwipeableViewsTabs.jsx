import { Tabs } from 'antd';
import HTMLReactParser from 'html-react-parser';
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

const SwipeableViewsTabs = (props) => {
    const [isIndex, setIsIndex] = useState(0);
    const [isTabIndex, setIsTabIndex] = useState("0");
    const onChange = (key) => {
        setIsIndex(parseInt(key));
        setIsTabIndex(key);
    };
    const handleChangeIndex = (index) => {
        setIsIndex(index);
        setIsTabIndex(String(index));
    }

    return (
        <>
            <div className='space_50'></div>
            <div className='swipeableviews'>
                <div className='gen4_title text_center'>
                    {HTMLReactParser(props.title)}
                </div>

                <Tabs activeKey={isTabIndex} defaultActiveKey={isTabIndex} className='swipeableviews_tabs' onChange={onChange}>
                    <Tabs.TabPane tab="Loan" key="0"></Tabs.TabPane>
                    <Tabs.TabPane tab="Lease" key="1"></Tabs.TabPane>
                </Tabs>

                <SwipeableViews index={isIndex} onChangeIndex={handleChangeIndex}>
                    {props.components.map((item, i) => {
                        return (
                            <div key={i} className='swipeableviews_tabs_each'>
                                {item.component}
                            </div>
                        );
                    })}
                </SwipeableViews>
            </div>
        </>
    )
}

export default SwipeableViewsTabs