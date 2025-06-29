import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ColorPage from './components/ColorPage';
import { useParams } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/color/:id" element={<ColorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
