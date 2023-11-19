import React, { useState } from 'react';
import arrowSVG from '../arrow-up-circle.svg';
import  '../styles/queryinterface.css'
const QueryInterface = ({handleSearchQuery})=>{
    const [query,setQuery] =useState("");
    const handleSearch = (query)=>{
        handleSearchQuery(query)
        setQuery("")
    }

    return (
    <div className="search-box-container">
      <input
        type="text"
        placeholder="Search logs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={()=>handleSearch(query)}>
        <img src={arrowSVG} alt="Search" />
      </button>
    </div>
    )
}

export default QueryInterface;


