import React from 'react';


export const CongratulationsMessage = ({numberOfClicks, threshold}) => {
    return numberOfClicks >= threshold ?
        <p>Congratulations! You have clicked at least 10 times</p> :
        null;
}