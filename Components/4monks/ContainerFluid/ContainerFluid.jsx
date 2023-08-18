import React, { useEffect, useState } from 'react';

const ContainerFluid = (props) => {
    const [isScreenWidth, setIsScreenWidth] = useState(null);
    const [isActualWidth, setIsActualWidth] = useState(null);
    const [isPaddingLeft, setIsPaddingLeft] = useState(null);

    function containerWidth() {
        setIsScreenWidth(window.innerWidth);
        setIsActualWidth(props.width);
        setIsPaddingLeft((isScreenWidth - isActualWidth) / 2);
    }

    useEffect(() => {
        containerWidth();
        window.addEventListener("resize", () => {
            containerWidth();
        })
    }, [isActualWidth, isScreenWidth])
    return (
        <div className="" style={{ paddingLeft: `${isPaddingLeft}px` }}>
            {props.children}
        </div>
    )
}

export default ContainerFluid