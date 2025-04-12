import { BrowserRouter as Router, Routes } from 'react-router-dom';
import WebRoutes from './modules/router';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <Routes>
        {WebRoutes}  
      </Routes>

   
      <Toaster />
    </Router>
  );
}

export default App;
