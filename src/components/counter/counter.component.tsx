import { ChangeEvent, useState } from "react";
import styles from "./counter.styles";

const Counter: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const [step, setStep] = useState<number>(1);

    const incrementHandler = () => {
        setCounter((current) => current + step);
    };

    const decrementHandler = () => {
        const newCounter = counter - step;
        if (newCounter < 0) return;
        setCounter(newCounter);
    };

    const stepChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setStep(parseInt(e.target.value, 10));
    };

    return (
        <div style={styles.container}>
            <h2>Counter: {counter}</h2>
            <button onClick={incrementHandler} style={styles.button}>
                Increment
            </button>
            <button onClick={decrementHandler} style={styles.button}>
                Decrement
            </button>
            <select onChange={stepChangeHandler} style={styles.select}>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </div>
    );
};

export default Counter;
