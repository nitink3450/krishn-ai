import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Ticker = ({ className, ...rest }) => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <CountUp {...rest} start={viewPortEntered ? null : 0} duration={2}>

            {({ countUpRef, start }) => (
                <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={start}
                    delayedCall
                >
                    <span className={className} ref={countUpRef} />
                </VisibilitySensor>
            )}

        </CountUp>
    );
};

export default Ticker;