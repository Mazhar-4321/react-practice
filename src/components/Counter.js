import React, { useState } from "react";

function Counter(properties){
     let [counterValue,changeCounterValue]=useState(0)
    function incrementCounterValue(){
        changeCounterValue(counterValue+1<=10?counterValue+1:counterValue)
    }
    function decrementCounterValue(){
        changeCounterValue(counterValue-1>=0?counterValue-1:counterValue)
    }
    return(
        <div >
            <button  onClick={incrementCounterValue}>+</button>
            <span>{counterValue}</span>
            <button onClick={decrementCounterValue}>-</button>
        </div>
    )
}

export default Counter;