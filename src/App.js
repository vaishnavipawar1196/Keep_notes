import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';


function App() {

  const [currtxt,updatedtxt] = useState("");

  const add_item = (event) => {
    //console.log(event.target.value);
    updatedtxt(event.target.value);
  };

  const [cuuitem,upitem] = useState([]);
  const adding_items = () => {
    upitem((olditem) => {
      return [...olditem,currtxt];
    });
    updatedtxt("");
  };

  const deleteItem = (id) => {
    //console.log("deleted");
    upitem((olditem) => {
      return olditem.filter((arrEle,index) => {
        return index !== id;
      });
    });
  }; 

  const editItem = (id) => {
    const newText = prompt("Edit item:", currtxt[id]);
    if (newText !== null) {
      upitem((olditem) =>
        olditem.map((curtxt, index) => (index === id ? newText : curtxt))
      );
    }
  }

  return (
    <div className="app">
      <div className="app_window">
        <div className='app_head'>
          <h2>To-Do List</h2>
        </div>
        <div className="app_content">
          <input onChange={add_item} value={currtxt} type="text" placeholder='Add an Items' />
          <button onClick={adding_items}> <i className="fa fa-plus" aria-hidden="true"></i></button>
        </div>
      </div>
      <div className='items'>
        <ol>
          {cuuitem.map((itemval, index) => {
            return <ToDoList text={itemval} id={index} key={index} onSelectEdit={editItem} onSelectDelete={deleteItem} />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
