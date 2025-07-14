import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { VideoList } from './pages/VideoList';
import { CreateVideo } from './pages/CreateVideo';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<VideoList />} />
          <Route path="/create" element={<CreateVideo />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
