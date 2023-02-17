import React, { useState } from "react";

export function UseStateWithArrays(props){
    const  [candidates,setCandidates]=useState(['','','','',''])
    function updateArray(){
       let randomNumber= Math.floor((Math.random() * 10) + 1);
       randomNumber=randomNumber%5;
       console.log(randomNumber)
       const temp=[...candidates]
       temp[randomNumber]="ho Gaya"
       setCandidates(temp)
    //    candidates[randomNumber]="Tum Hue Bhai Select"
    //    console.log(candidates)
    //    setCandidates(candidates,...candidates)
    }
return(
    <div className="MyDiv">
     <p>Mazhar{candidates[0]}</p>
     <p>Mir{candidates[1]}</p>
     <p>Afridi{candidates[2]}</p>
     <p>Saif{candidates[3]}</p>
     <p>Taha{candidates[4]}</p>
     <button onClick={updateArray}>Click</button>
    </div>
)
}
