import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/home/home';
import Header from './pages/home/top-news/topNews';
import SmartUp from './pages/smart-up/smartUp';
import Profile from './pages/profile/profile';
import Personal from './pages/personal/personal';
import Progress from './pages/progress/progress';
import Completed from './pages/completed/completed';
import Read from './pages/read/read';
import About from './pages/about/about';
import Feedback from './pages/feedback/feedback';
import Teams from './pages/teams/teams';
import Privacy from './pages/privacy/privacy';
import TopNews from './pages/home/top-news/topNews';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}>
        <Route path="/" element={<TopNews />} />
        <Route path="/top-news" element={<TopNews />} />
        <Route path="/smartup" element={<SmartUp />} />
        <Route path="/profile" element={<Profile />} />
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
