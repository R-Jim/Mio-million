import { HashRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Anniversary from './pages/Anniversary';
import SendMessage from './pages/SendMessage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Anniversary />} />
            <Route path="/send-message" element={<SendMessage />} />
          </Routes>
        </HashRouter >
      </div>
    </div>
  );
}

export default App;
