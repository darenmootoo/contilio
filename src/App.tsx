import logo from './logo.svg';
import './App.scss';
import LoginPage from './views/Login';
import Dashboard from './views/Dashboard';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Router >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
