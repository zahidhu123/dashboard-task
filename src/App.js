import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/home/home';
import Header from './pages/home/header/header';
import SmartUp from './pages/smart-up/smartUp';
import Profile from './pages/profile/profile';
import ManCommunity from './pages/man-community/manCommunity';
import FunCommunity from './pages/fun-community/funCommunity';
import TechCommunity from './pages/tech-community/techCommunity';
import LeadCommunity from './pages/lead-community/leadCommunity';
import Personal from './pages/personal/personal';
import Progress from './pages/progress/progress';
import Completed from './pages/completed/completed';
import Read from './pages/read/read';
import About from './pages/about/about';
import Feedback from './pages/feedback/feedback';
import Teams from './pages/teams/teams';
import Privacy from './pages/privacy/privacy';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}>
        <Route path="/" element={<Header />} />
        <Route path="/header" element={<Header />} />
        <Route path="/smartup" element={<SmartUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/man-community" element={<ManCommunity />} />
        <Route path="/fun-community" element={<FunCommunity />} />
        <Route path="/tech-community" element={<TechCommunity />} />
        <Route path="/lead-community" element={<LeadCommunity />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/read" element={<Read />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/privacy" element={<Privacy />} />
        
      </Route>
    </Routes>
  );
}

export default App;
