import { useState } from 'react';
import Titulo from '../../componentes/Titulo';
import Subtitulo from '../../componentes/Subtitulo';
import Pesquisar from '../../componentes/Pesquisar';
import ListaLivros from '../../componentes/ListaLivros';
import { useFavoritos, useSacola } from '../../hooks/useLoja';
import './estilo.css';

function Favoritos() {
  const [favoritos, onAlternarFavorito] = useFavoritos();
  const [itensSacola, onAdicionarSacola] = useSacola();
  const [resultadosBusca, setResultadosBusca] = useState(null);
  const [buscaKey, setBuscaKey] = useState(0);
  const livrosExibidos = resultadosBusca ?? favoritos;

  function alternarFavorito(livro) {
    setResultadosBusca(null);
    onAlternarFavorito(livro);
  }

  function listarTodos() {
    setResultadosBusca(null);
    setBuscaKey((chaveAtual) => chaveAtual + 1);
  }

  return (
    <main className='pagina pagina-favoritos'>
      <Titulo>Favoritos</Titulo>
      <Subtitulo>Livros que você guardou para ler depois.</Subtitulo>
      <Pesquisar
        key={buscaKey}
        livros={favoritos}
        favoritos={favoritos}
        onAlternarFavorito={alternarFavorito}
        placeholder='Buscar nos favoritos'
        titulo='Buscar livros'
        subtitulo='Encontre um livro entre seus favoritos.'
        mostrarResultados={false}
        onResultadosChange={setResultadosBusca}
      />
      <button className='botao-listar-todos' type='button' onClick={listarTodos}>
        Listar todos
      </button>
      <section className='lista-favoritos' aria-label='Livros favoritados'>
        {livrosExibidos.length === 0 ? (
          <p>Nenhum favorito corresponde à busca.</p>
        ) : (
          <ListaLivros
            livros={livrosExibidos}
            favoritos={favoritos}
            itensSacola={itensSacola}
            mostrarSacola={false}
            onAlternarFavorito={alternarFavorito}
            onAdicionarSacola={onAdicionarSacola}
          />
        )}
      </section>
    </main>
  );
}

export default Favoritos;
