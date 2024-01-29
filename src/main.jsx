import React from 'react'
import ReactDOM from 'react-dom/client'
import app from './app.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    // Add logic to play click sound
    const newItem = prompt('Enter a to-do item:');
    setItems([...items, newItem]);
  };
  const deleteItem = (index) => {
    // Add logic to play click sound
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;