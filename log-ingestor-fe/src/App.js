
import { useState } from 'react';
import './App.css';
import QueryInterface from './components/QueryInterface';
import QueryList from './components/QueryList';
function App() {
  const apiUrl = "http://localhost:3000/api/v1/log-ingestor/query?";
  const [searchLog,setSearchLog] = useState([]);
  const keywords = [
    'level',
    'message',
    'resourceId',
    'timestamp',
    'traceId',
    'spanId',
    'commit',
    'parentResourceId',
];


const getValue = (queryString)=>{
  const regex = /"(.*?)"/g;
  const matches = [];

  let match;
  while ((match = regex.exec(queryString)) !== null) {
      const value = match[1];
      matches.push(value);
  }

  return matches;
}

const getKeyword = (queryString)=> {
  const regex = /([\w]+)/g;
  const matches = [];

  let match;
  while ((match = regex.exec(queryString)) !== null) {
    const keyword = match[1];
    if (keywords.includes(keyword)) {
      matches.push(keyword);
    }
  }
  return matches;
}

const handleSearchQuery = async (query)=>{
  let keywords = getKeyword(query);
  let values = getValue(query);
  let queryUrl = `${apiUrl}`;
  for(let i = 0; i < values.length; i++) {
    if(i>=1){
      queryUrl += "&";
    }
    if(keywords[i]=="parentResourceId"){
      queryUrl +=  `metadata.parentResourceId=${values[i]}`;
    }else{
      queryUrl +=  `${keywords[i]}=${values[i]}`;
    }
  }
  const response = await fetch(queryUrl);
  const data = await response.json();
  setSearchLog(data);
}

  return (
    <div className="App">
      <header className="App-header">
        <QueryInterface handleSearchQuery={handleSearchQuery}/>
        <QueryList searchLog={searchLog}/>
      </header>
    </div>
  );
}

export default App;
