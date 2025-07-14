import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VideoList } from './pages/VideoList';
import { CreateVideo } from './pages/CreateVideo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/create" element={<CreateVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
