import React, { useEffect, useState } from 'react';
import Cardlist from './components/Cardlist.js';
import Searchbox from './components/searchbox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry.js';

function App() {
  const [robots,setRobots]=useState([]);
  const [searchField,setSearchField]=useState('');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
			.then(users=>setRobots(users))

    document.title='robo friends';
  },[])

  const onSearchChange=(e)=>setSearchField(e.target.value)

  const filterdRobots=robots.filter(i=>{
    return i.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return !robots.length?
    <h1 className='tc'>loading ...</h1> :
  (
    <div className="tc">
      <h1>Robo friends</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <Cardlist robots={filterdRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
