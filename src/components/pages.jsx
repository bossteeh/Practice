import { Routes, Route } from 'react-router-dom';
// import Header from './Header/Header';
import Join from './Join/Join';
import Discover from './Discover/Discover';
import Home from './Home/Home';

const Pages = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="discover" element={<Discover />} />
      <Route path="join" element={<Join />} />
    </Routes>
  );
};

export default Pages;
