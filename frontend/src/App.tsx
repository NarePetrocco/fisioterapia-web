import { BrowserRouter as Router, Routes, } from 'react-router-dom';
import WebRoutes from './modules/router';

function App() {
  return (
    <Router>
      <Routes>
        {WebRoutes}  {/* Ya no necesitas el operador de propagación */}
      </Routes>
    </Router>
  );
}

export default App;