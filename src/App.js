import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Anniversary from './pages/Anniversary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Anniversary />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
