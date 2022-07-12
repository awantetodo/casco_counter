import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBoostrap from './components/NavBarBooster/NavbarBoostrap';
import ItemListContainerJsx from './components/ItemListContainer/ItemListContainerJsx'
import ItemDetailContainerJsx from './components/ItemDetailContainer/ItemDetailContainerJsx';
import Carrito from './components/Carrito/Carrito';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavbarBoostrap />

      <Routes>
        <Route path="/" element={<ItemListContainerJsx greetings="Productos"/>}/>
        <Route path="/categoria/:catid" element={<ItemListContainerJsx greetings="Filtrar Busqueda"/>}/>
        <Route path="/producto/:productoid" element={<ItemDetailContainerJsx />}/>
        <Route path="/carrito/" element={<Carrito />}/>
        <Route path="*" element={<Navigate to="/"/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;