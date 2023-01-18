import { useState } from 'react';


export const useProduct = (initValue = 0) => {
    const [ counter, setCounter ] = useState(initValue);

    const increaseBy = (value:number) => {
        setCounter(Math.max(counter + value, 0));
    }

    return {
        counter,
        increaseBy
    }
}
