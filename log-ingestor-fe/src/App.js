
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
  const regex = /"([^"]*)"/;
  const match = regex.exec(queryString);

  if (match) {
      const value = match[1];
      return value;
  } else {
      return null;
  }
}

const getKeyword = (queryString)=> {
    for (const keyword of keywords) {
        if (queryString.includes(keyword)) {
            return keyword;
        }
    }
    return null;
}

const handleSearchQuery = async (query)=>{
  let keyword = getKeyword(query);
  if (keyword=="parentResourceId"){
    keyword = "metadata.parentResourceId";
  }
  const value = getValue(query);
  const queryUrl = `${apiUrl}${keyword}=${value}`;
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
