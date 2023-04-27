import React, { FC, useState, useEffect } from 'react';

import Discount from '../Discount/Discount';
import Specials from '../Specials/Specials';
import Desserts from '../Desserts/Desserts';
import Sale from '../Sale/Sale';
import Counter from '../Counter/Counter';
import Recommendations from '../Recommendations/Recommendations';
import Input from '../Input/Input';
import Clock from '../Clock/Clock';
import RandomDiscount from '../RandomDiscount/RandomDiscount';

import styles from './Home.module.scss';
import Header from '../../LayoutArea/Header/Header';




interface HomeProps { }

const Home: FC<HomeProps> = () => {

    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');
    const [price, setPrice] = useState(0);

    console.log('Home - render')


    const increaseCounterHandler = () => {



        setCounter((prevState) => prevState = prevState + 1)
    }
    // const decreaseCounterHandler = () => {

    //     setCounter((prevState) => {
    //         if (prevState === 0) return 0;

    //         return prevState = prevState - 1;
    //     })
    // }

    const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const priceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(+e.target.value);
    }


    // useEffect(() => {



    //     console.log('useEffect - home render')

    //     return () => {
    //         //clean
    //     }

    // }, [ counter  ]);



    return (
        <div className={styles.Home}>
            <h1>{counter}</h1>
            {/* 
            <input type="text" value={value} onChange={(e) => {
                const newValue = e.target.value;
                setValue(newValue);
            }} /> */}

            <button onClick={increaseCounterHandler}>+</button>
            {/* <Input type="number" value={price} onChange={priceChangeHandler} /> */}
            {/* interpolation */}
            <Discount counter={counter} >    <span>Hello , i am a span child</span>   </Discount>











        </div>
    )

}

export default Home;


