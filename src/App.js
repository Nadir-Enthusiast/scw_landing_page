import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Mission from './components/mission/Mission';
import History from './components/history/History';
import Achiev from './components/achiev/Achiev';
import Call from './components/call/Call';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function MainPage() {
  return(
    <div>
      <Navbar />
      <Intro />
      <Mission />
      <History />
      <Achiev />
      <Call />
    </div>
  )
}

export default App;
