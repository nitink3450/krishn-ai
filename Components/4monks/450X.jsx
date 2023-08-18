import React from 'react';
import ColorMatch from '../components/Gen4/450X/ColorMatch/ColorMatch';
import Foreseen from '../components/Gen4/450X/Foreseen/Foreseen';
import Performance from '../components/Gen4/450X/Performance/Performance';
import SafetyAndProtect from '../components/Gen4/450X/SafetyAndProtect/SafetyAndProtect';
import ThinkRange from '../components/Gen4/450X/ThinkRange/ThinkRange';
import WhatsNew from '../components/Gen4/450X/WhatsNew/WhatsNew';
import Footer from '../components/Gen4/Common/Footer/Footer';
import ProductHeader from '../components/Gen4/Common/Header/ProductHeader';
import KnowScooter from '../components/Gen4/Common/KnowScooter/KnowScooter';
import Lease from '../components/Gen4/Common/Lease/Lease';
import Loan from '../components/Gen4/Common/Loan/Loan';
import Ownership from '../components/Gen4/Common/Ownership/Ownership';
import Pricing from '../components/Gen4/Common/Pricing/Pricing';
import SwipeableViewsTabs from '../components/Gen4/Common/SwipeableViews/SwipeableViewsTabs';
import VideoComponentV1 from '../components/Gen4/Common/VideoComponentV2/VideoComponentV2';
import WhatsIncluded from '../components/Gen4/Common/WhatsIncluded/WhatsIncluded';

const ModalX = () => {
    return (
        <main className="" style={{ background: '#F7F7F7', overflow: 'clip' }}>
            <ProductHeader
                title={'Ather 450X'}
                menu={[
                    'What’s New',
                    'Performance',
                    'Range',
                    'Intelligence',
                    'Convenience',
                    'Safety',
                    'Colour',
                    'Pricing',
                ]}
                price={'₹1,55,000'}
            />
            <VideoComponentV1
                video={'/images/Gen4/videos/ather.mp4'}
                autoplay={true}
                title={'New Again'}
                topBG={'transparent'}
                bottomBG={'#000'}
            />
            <WhatsNew />
            <Performance />
            <ThinkRange />
            <Foreseen />
            <SafetyAndProtect />
            <ColorMatch />
            <section>
                <div className="space_100"></div>
                <Pricing />
                <WhatsIncluded />
                <KnowScooter />
                <div className="space_50"></div>
            </section>
            <SwipeableViewsTabs
                title={'Choose the way <br /> you own it'}
                components={[
                    {
                        key: 0,
                        component: <Loan />,
                    },
                    {
                        key: 1,
                        component: <Lease />,
                    },
                ]}
            />
            <Ownership />
            <Footer />
        </main>
    );
};

export default ModalX;
