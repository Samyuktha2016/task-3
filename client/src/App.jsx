import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';
import { Toaster } from 'react-hot-toast';

// Placeholder components until created
const NotFound = () => <div className="text-center mt-20">Page Not Found</div>;

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Toaster position="top-right" />
        {/* Navigation could go here */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
