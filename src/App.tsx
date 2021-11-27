import React, { useState, useMemo } from 'react';
import './App.css';
import Parent from './parent';
import Children from './children';

function App() {
  const [visible, setVisible] = useState(false);
  window.setTimeout(() => setVisible(true), 3000);
  const memorizedChildren = useMemo(() => <Children />, []);
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {visible ? <div>loaded</div> : <div>now loading...</div>}
      <Parent>{memorizedChildren}</Parent>
    </div>
  );
}

export default App;
