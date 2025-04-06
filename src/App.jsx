import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import TemplatePage from './pages/TemplatePage.jsx';
import CreateCardPage from './pages/CreateCardPage.jsx';
import SaveCardPage from './pages/SaveCardPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/select-template'
          element={<TemplatePage />}
        />
        <Route
          path='/create/:cardId'
          element={<CreateCardPage />}
        />
        <Route
          path='/save/:cardId'
          element={<SaveCardPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
