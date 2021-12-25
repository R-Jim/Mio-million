import { HashRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import './App.css'
import Anniversary from './pages/Anniversary'
import SendMessage from './pages/SendMessage'

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
      <NotificationContainer />
    </div>
  );
}

export default App;
