import React, { FC, ReactNode } from 'react';
import styles from './Discount.module.scss';



interface DiscountProps {
    counter: number;
    children: ReactNode
}

const Discount: FC<DiscountProps> = (props) => {
    const { counter, children } = props;

    console.log('discount-render')
    let percent = 10; //demo for getting discount from the server (place holder)

    return (
        <div className={`Box ${styles.Discount}`}>
            <span>Only now -  {percent}  % discount on all products! </span>
            <span>{counter}</span>
            <div className='children'> {children}    </div>
        </div>
    );
}

export default Discount;



