import React from "react";

const ToDoList = (props) => {
    return (
    <>
        <div className="list_content" style={{display:'flex',marginTop: '12px'}}>
            <i className="fa fa-times" aria-hidden="true" onClick={ () => {     
                props.onSelectDelete(props.id);
            }} />
            
            <li style={{marginLeft:'25px'}}> {props.text} </li>
        
            &nbsp;&nbsp;<i className="fa fa-pencil-square-o" aria-hidden="true" onClick={ () => {     
                props.onSelectEdit(props.id);
            }} />
        </div>
    </>
    );
};

export default ToDoList;