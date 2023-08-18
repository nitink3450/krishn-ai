import React from 'react';
import { useMediaQuery } from '../UseMediaQuery/UseMediaQuery';
import PrimaryNavigation from './PrimaryNavigation';
import ProductNavigation from './ProductNavigation';

const ProductHeader = (props) => {
    const isDesktop = useMediaQuery('(min-width: 900px)');
    const isMobile = useMediaQuery('(max-width: 900px)');

    return (
        <>
            {isDesktop &&
                <>
                    <PrimaryNavigation />
                    <ProductNavigation title={props.title} menu={props.menu} price={props.price} />
                </>
            }

            {isMobile && <ProductNavigation title={props.title} menu={props.menu} price={props.price} />}


        </>
    )
}

export default ProductHeader