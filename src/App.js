import React, { useState } from "react";
import "./App.css";
function App() {
  const [inputText,setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newItem = event.target.value;
    setInputText(newItem);
  }

  function addItems(){
    setItems((prevItem) =>{
      return [...prevItem, inputText];
    })
    // to empty the input after adding setInputText to empty 
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      

      <div>
        <ul>
        { 
          items.map((todoItem)=> {
            return <li>{todoItem}</li>;
        })

        }
          
        </ul>
      </div>
    </div>
  );
}

export default App;
