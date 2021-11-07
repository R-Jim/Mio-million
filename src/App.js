import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Anniversary from './pages/Anniversary';
import NewMessage from './pages/NewMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Anniversary />} />
            <Route path="/submit" element={<NewMessage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
