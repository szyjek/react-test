import React, {useEffect} from 'react';


export const CongratulationsMessage = ({numberOfClicks, threshold, onHide}) => {
    useEffect(()=> {
        return () => console.log('CongratulationsMessage unmounting!');
    }, []);

    return numberOfClicks >= threshold ?
        <>
        <p>Congratulations! You have clicked at least 10 times</p>
            <button onClick={onHide}>Hide</button>
            </>:
        null;
}