import React, { useState } from "react";

const IncreDecre =() =>{

    const [cur_no,update_no] = useState(0)

    const increment = () => {
        update_no(cur_no + 1);
    }
    
    const decrement = () => {
        if(cur_no > 0){
            update_no(cur_no - 1);
        }else{
            alert("Zero,Limit reached!");
            update_no(0);
        }
    }

    return(
        <>
            <div className="main">
                <div className='app_head'>
                    <h2>{cur_no}</h2>
                </div>
                <div style={{display:'flex',justifyContent: 'space-around'}}>
                    <button className="btn1" title="add" onClick={increment}><i className="fa fa-plus" aria-hidden="true"></i></button>
                    <button className="btn2" title="delete" onClick={decrement}><i className="fa fa-minus" aria-hidden="true"></i></button>
                </div>
            </div>
        </>
    )
}

export default IncreDecre;