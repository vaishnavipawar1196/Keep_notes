import React, { useState } from "react";
import { Que_ans } from "./Que_Ans";
import Accordion_Content from "./Accordion_Content";


const Accordian_Arr = () => {
    const [curr_Ele,up_Ele] = useState(Que_ans);
    return(
        <>
            {curr_Ele.map((val) => {
                return <Accordion_Content key={val.id} {...val} /> 
            })
            }
        </>
    )
}
export default Accordian_Arr;