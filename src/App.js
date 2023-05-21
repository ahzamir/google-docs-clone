import './App.css';
import TextEditor from './components/TextEditor';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="main-container">
      <Sidebar />
      <TextEditor />
    </div>
  );
}

export default App;
