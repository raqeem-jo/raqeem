import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout component
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AcademicPage from './pages/AcademicPage';
import TechnicalPage from './pages/TechnicalPage';
import AchievementsPage from './pages/AchievementsPage';
import VolunteerPage from './pages/VolunteerPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App" dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="academic" element={<AcademicPage />} />
            <Route path="technical" element={<TechnicalPage />} />
            <Route path="achievements" element={<AchievementsPage />} />
            <Route path="volunteer" element={<VolunteerPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
