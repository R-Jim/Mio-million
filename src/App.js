import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Anniversary from './pages/Anniversary';
import SendMessage from './pages/SendMessage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Anniversary />} />
            <Route path="/send-message" element={<SendMessage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
