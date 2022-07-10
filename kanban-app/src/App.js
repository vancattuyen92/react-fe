import './App.scss';
import React from 'react'
import MenuColumn from './components/MenuColumn/MenuColumn';
import Header from './components/Header/Header';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

function App() {
  return (
    <div className="myapp">
      <MenuColumn/>
      <div className="content">
        <Header/>
        <KanbanBoard/>
      </div>
    </div>
  );
}

export default App;
