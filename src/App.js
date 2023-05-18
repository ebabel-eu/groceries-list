import { useState } from "react";
import "./App.css";

export default function App() {
  const [groceries, setGroceries] = useState([]);
  const [duplicateFound, setDuplicateFound] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const newGrocery = document.getElementById("newGrocery").value;

    const isDuplicate =
      groceries.filter((g) => g.toLowerCase() === newGrocery.toLowerCase())
        .length > 0;

    if (isDuplicate) {
      setDuplicateFound(true);
    }

    if (!isDuplicate) {
      setDuplicateFound(false);
      setGroceries([...groceries, newGrocery]);
    }
  };

  return (
    <div className="App">
      <h1>Groceries list</h1>
      {groceries.map((grocery) => (
        <p key={grocery}>{grocery}</p>
      ))}

      <input type="text" id="newGrocery" />
      <button onClick={handleClick}>Add</button>

      {duplicateFound && <p className="error">This is a duplicate entry</p>}
    </div>
  );
}
