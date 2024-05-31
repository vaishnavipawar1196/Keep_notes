import React, { useState } from "react";
import { Que_ans } from "./Que_Ans";

const Accordion_Content = ({questions,answers}) => {
    const [show,setShow] = useState(false);
    return(
        <>
            <div className="acc_cont" style={{background: '#b0e0f32b'}}>
                <h4><i onClick={ () => setShow(!show)} className={show ? "fa fa-minus" : "fa fa-plus"} aria-hidden="true"></i>{questions}</h4>
                { show && <p>{answers}</p> }
            </div>
        </>
    )
}
export default Accordion_Content;