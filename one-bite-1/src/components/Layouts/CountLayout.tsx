// Count View
import CountView from "../Views/CountView";

// Controller View
import CountController from "../Controlls/CountController";

// Odd or Even View
import OddOrEven from "../Views/OddOrEven";

import { useState, useEffect } from "react";

const CountLayout = (): JSX.Element => {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log('mount');
    }, []);

    useEffect(() => {
        return () => {
            console.log('unmount');
        }
    }, []);

    const onClickCountButton = (value: number) => {
        setCount(count + value);
    }

    return (
        <>
        <main>
            <h1 className="title">Simple Counter</h1>
            <section className="section">
                <CountView count={count} />
            </section>
            
            <section className="section">
                <OddOrEven count={count} />
            </section>
            
            <section className="section">
                <CountController 
                    onClickCountButton={onClickCountButton} />
            </section>
            
        </main>
        </>
    )
};

export default CountLayout;