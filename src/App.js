
import './App.css';
import { Hearder } from './components/Hearder';
import { Empresas } from './pages/Empresas';
import { Facturacion } from './pages/Facturacion';
import { Home } from './pages/Home';
import { Metricas } from './pages/Metricas';
import { Monotributo } from './pages/Monotributo';

function App() {
  return (
    <div className="App">
      <Hearder />
      <Home />
      <Empresas />
      <Monotributo />
      <Facturacion />
      <Metricas />
    </div>
  );
}

export default App;
