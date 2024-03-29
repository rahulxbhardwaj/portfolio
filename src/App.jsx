import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './components/home.jsx';
import './styles/App.scss';
import './styles/header.scss'
import './styles/home.scss'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/" element={<Home />} />
  
      </Routes>
  </Router>
  )
}
