import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import TemplatePage from './pages/TemplatePage.jsx';
import CreateCardPage1 from './pages/CreateCardPage1.jsx';
import CreateCardPage2 from './pages/CreateCardPage2.jsx';
import CreateCardPage3 from './pages/CreateCardPage3.jsx';
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
          path='/select-template/:cardId'
          element={<TemplatePage />}
        />
        <Route
          path='/create1/:cardId'
          element={<CreateCardPage1 />}
        />
        <Route
          path='/create2/:cardId'
          element={<CreateCardPage2 />}
        />
        <Route
          path='/create3/:cardId'
          element={<CreateCardPage3 />}
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
