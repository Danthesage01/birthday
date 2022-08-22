import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  const persons = people.map(person => {
    const { id } = person

    function removeID(id) {
      const newUsers = people.filter(person => person.id !== id)
      setPeople(newUsers)
    }
    return (
      <div className='person' key={id}>
        <List person={person} />
        <h3 onClick={() => removeID(id)} className='toggle'>X</h3>
      </div>
    )
  })

  return (
    <main>
      <div className="container">
        <h3>{persons.length} Birthdays Today</h3>
        {persons}
        <button onClick={() => setPeople([])}>clear all</button>
      </div>
    </main>
  )
}
export default App;
