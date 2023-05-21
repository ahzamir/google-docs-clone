import './App.css';
import { useState } from 'react';
import TextEditor from './components/TextEditor';
import Sidebar from './components/Sidebar';
import SidebarToggle from './components/Sidebar/SidebarToggle';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  return (
    <div className="main-container">
      <Sidebar sidebarCollapsed={sidebarCollapsed} />
      <TextEditor sidebarCollapsed={sidebarCollapsed} />
      <SidebarToggle sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
    </div>
  );
}

export default App;
