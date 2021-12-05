import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import './App.css';
import Anniversary from './pages/Anniversary';
import SendMessage from './pages/SendMessage';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
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
