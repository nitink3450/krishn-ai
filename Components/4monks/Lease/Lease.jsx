import Image from 'next/image';
import React from 'react';
import Styles from './Lease.module.scss';

const Lease = () => {
    return (
        <div className='gen4_container'>
            <div className={Styles.lease}>
                <div className={Styles.lease_inner}>
                    <div className={Styles['lease_inner--title']}>Lease</div>
                    <div className={Styles['lease_inner_pricing']}>
                        <div className={Styles['lease_inner_pricing--amount']}>Starting from ₹2,601 </div>
                        <div className={Styles['lease_inner_pricing--link']}>Know more <Image src='/images/gen4/arrow-right-black.svg' width={12} height={12} alt='arrow' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lease