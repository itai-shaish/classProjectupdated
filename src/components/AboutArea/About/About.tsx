import React, { FC, useContext, useState, useMemo, useCallback } from 'react';
import styles from './About.module.scss';
import { UserContext } from '../../../context/Provider';


const set = new Set();



const expensive = () => {

    console.log('expensive is running')
    const numbers: number[] = [];

    for (let i = 0; i < 1000; i++) {
        numbers.push(i);
    }

    return numbers;
}




const DisplayName: FC<{ name: string }> = React.memo(({ name }) => {
    console.log('[render component Display Name')
    return <h1>{name}</h1>
})


interface AboutProps { }

const About: FC<AboutProps> = () => {
    const [user, setHobby] = useContext(UserContext)
    const [value, setValue] = useState('');

    const addHobby = () => {
        setHobby(value);
        setValue('');
    }

    const numbers = useMemo(() => expensive(), []);

    // const numbers = expensive();

    const saySomething = useCallback(() => {
        console.log('say Something')
    }, [])



    set.add(saySomething);


    console.log(set)

    return (
        <div className={styles.About}>
            <button onClick={addHobby}>Add Hobby</button>
            <input value={value} onChange={(e) => {
                setValue(e.target.value);
            }} type="text" />
            <hr />
            <p>age: {user.age}</p>
            <hr />
            <p>name:{user.name}</p>
            <hr />
            {user.hobbies.map(hobby => <strong key={hobby}> | {hobby} |</strong>)}
            <DisplayName name="Ronen" />

        </div>
    )
}

export default About;
