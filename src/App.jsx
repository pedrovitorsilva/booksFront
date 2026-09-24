import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './rotas/Home';
import Categoria from './rotas/Categoria';
import Favoritos from './rotas/Favoritos';
import Estante from './rotas/Estante';
import Perfil from './rotas/Perfil';
import Sacola from './rotas/Sacola';
import Cadastro from './rotas/Cadastro';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categorias' element={<Categoria />} />
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/minha-estante' element={<Estante />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/sacola' element={<Sacola />} />
      </Routes>
    </div>
  );
}

export default App;
