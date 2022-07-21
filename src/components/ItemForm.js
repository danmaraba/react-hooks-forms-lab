import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newValue,setNewValue]=useState("")
  const [newCategory,setCategory]=useState("Produce")

  function handleChangeValue(e) {
    setNewValue(e.target.value);
  }

  function handleChangeCategory(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newItem={
      id:uuid(),
      name:newValue,
      category:newCategory
    }
    onItemFormSubmit(newItem)
    
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChangeValue}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChangeCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
