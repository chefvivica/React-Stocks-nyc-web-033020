import React from 'react';

const SearchBar = (props) => {
  //this case the name is optional, must have value
  return (
    <div>
      <div >
      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="checked" value="Alphabetically"  onChange={(e)=>props.sortedStock(e.target.value)} checked={null}/>
        Alphabetically:
      </label>
      <label>
        <input type="radio" name="checked" value="Price" onChange={(e)=>props.sortedStock(e.target.value)}  checked={null} />
        Price:
      </label>
      <br/>
      </div>
      <label>
        <strong>Filter:</strong>
        <select onChange={props.filterHandler}>
          <option value="Tech" >Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}



export default SearchBar;