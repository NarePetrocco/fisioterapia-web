import { BrowserRouter as Router, Routes } from 'react-router-dom';
import WebRoutes from './modules/router';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <Routes>
        {WebRoutes}  {/* Ya no necesitas el operador de propagación */}
      </Routes>

      {/* Coloca el componente Toaster donde quieres que los toasts aparezcan */}
      <Toaster />
    </Router>
  );
}

export default App;
