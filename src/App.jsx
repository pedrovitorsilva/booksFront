import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './rotas/Home';
import Categoria from './componentes/Categoria';
import Favoritos from './componentes/Favoritos';
import Estante from './componentes/Estante';
import Perfil from './componentes/Perfil';
import Sacola from './componentes/Sacola';
import Cadastro from './componentes/Cadastro';
import { catalogoLivros } from './dados/catalogoLivros';

const CHAVE_FAVORITOS = 'booksia-favoritos';

const categorias = [
  { id: 1, nome: 'Front-end' },
  { id: 2, nome: 'Back-end' },
  { id: 3, nome: 'Dados e IA' },
  { id: 4, nome: 'UX/UI' },
  { id: 5, nome: 'Arquitetura' },
];

function lerFavoritos() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_FAVORITOS)) || [];
  } catch {
    return [];
  }
}

function App() {
  const [favoritos, setFavoritos] = useState(lerFavoritos);
  const [itensSacola, setItensSacola] = useState([]);
  const [livrosComprados, setLivrosComprados] = useState(() => (
    catalogoLivros.slice(0, 3).map((livro) => ({ ...livro, quantidade: 1 }))
  ));

  useEffect(() => {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
  }, [favoritos]);

  function alternarFavorito(livro) {
    setFavoritos((favoritosAtuais) => {
      const livroFavoritado = favoritosAtuais.some(({ id }) => id === livro.id);

      return livroFavoritado
        ? favoritosAtuais.filter(({ id }) => id !== livro.id)
        : [...favoritosAtuais, livro];
    });
  }

  function alternarSacola(livro) {
    setItensSacola((itensAtuais) => {
      const itemExistente = itensAtuais.find((item) => item.id === livro.id);

      return itemExistente
        ? itensAtuais.filter((item) => item.id !== livro.id)
        : [...itensAtuais, { ...livro, quantidade: 1 }];
    });
  }

  function atualizarQuantidadeSacola(id, quantidade) {
    setItensSacola((itensAtuais) => itensAtuais.map((item) => (
      item.id === id ? { ...item, quantidade: Math.max(1, quantidade) } : item
    )));
  }

  function removerDaSacola(id) {
    setItensSacola((itensAtuais) => itensAtuais.filter((item) => item.id !== id));
  }

  function concluirCompra() {
    setLivrosComprados((livrosAtuais) => (
      itensSacola.reduce((lista, item) => {
        const itemExistente = lista.find((livro) => livro.id === item.id);

        if (itemExistente) {
          return lista.map((livro) => (
            livro.id === item.id
              ? { ...livro, quantidade: (livro.quantidade || 0) + item.quantidade }
              : livro
          ));
        }

        return [...lista, { ...item, quantidade: item.quantidade || 1 }];
      }, livrosAtuais)
    ));
    setItensSacola([]);
  }

  const propsLivros = {
    favoritos,
    itensSacola,
    onAlternarFavorito: alternarFavorito,
    onAdicionarSacola: alternarSacola,
  };

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home {...propsLivros} />} />
        <Route path='/categorias' element={<Categoria categorias={categorias} livros={catalogoLivros} {...propsLivros} />} />
        <Route path='/favoritos' element={<Favoritos {...propsLivros} />} />
        <Route path='/minha-estante' element={<Estante livrosComprados={livrosComprados} />} />
        <Route path='/perfil' element={<Perfil quantidadeFavoritos={favoritos.length} />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route
          path='/sacola'
          element={(
            <Sacola
              itensSacola={itensSacola}
              onAdicionarSacola={alternarSacola}
              onAtualizarQuantidade={atualizarQuantidadeSacola}
              onRemoverDaSacola={removerDaSacola}
              onFinalizarCompra={concluirCompra}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
