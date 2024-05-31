import React from "react";
import Accordian_Arr from "./Accordian_arr";

const Accordion = () => {
    return (
        <>
            <div className="app" style={{width:'45%'}}>
                <div className="app_window">
                    <div className='app_head'>
                        <h2>React JS Question & Answers</h2>
                    </div>
                    <div className='app_content1'>
                        <Accordian_Arr />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Accordion;