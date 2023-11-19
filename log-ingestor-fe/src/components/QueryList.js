import React, { useState } from 'react';
import "../styles/querylist.css"
const QueryList = ({searchLog})=>{
    return (
        <div className="scrollable-list-container">
            <ul className="scrollable-list">
            {searchLog.map((item, index) => (
                <li key={index} className="list-item">
                <pre>{JSON.stringify(item, null, 2)}</pre>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default QueryList;