import React, {useState} from "react";
import './App.css';
import {CounterButton} from "./CounterButton";
import {CongratulationsMessage} from "./CongratulationsMessage";


function App() {


    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const increment = () => setNumberOfClicks(numberOfClicks + 1);
    return (
        <div className="App">
            <header className="App-header">
                <CongratulationsMessage threshold={10} numberOfClicks={numberOfClicks}/>
                <CounterButton numberOfClicks={numberOfClicks} onIncrement={increment}/>

            </header>
        </div>
    );
}

export default App;
