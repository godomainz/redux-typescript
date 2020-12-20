import React from 'react';
import './App.css';
import NewNoteInput from './NewNoteInput';

function App() {
  return (
    <div className="App">
      <NewNoteInput addNote={alert}/>
      <hr/>
      <ul>
        <li>Some note</li>
      </ul>
    </div>
  );
}

export default App;
