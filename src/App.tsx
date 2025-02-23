import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { Home } from './pages/home';
import { ProjectsPage } from './pages/projects';
import { TeamPage } from './pages/team';
import { LearnMorePage } from './pages/LearnMorePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/learnmore" element={<LearnMorePage />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </Router>
  );
}

export default App;