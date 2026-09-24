import { useState } from 'react';
import ListaLivros from '../../componentes/ListaLivros';
import Titulo from '../../componentes/Titulo';
import Subtitulo from '../../componentes/Subtitulo';
import { catalogoLivros } from '../../dados/catalogoLivros';
import { useFavoritos, useSacola } from '../../hooks/useLoja';
import './estilo.css';

const categorias = [
  { id: 1, nome: 'Front-end' },
  { id: 2, nome: 'Back-end' },
  { id: 3, nome: 'Dados e IA' },
  { id: 4, nome: 'UX/UI' },
  { id: 5, nome: 'Arquitetura' },
];

function embaralharLivros(livros) {
  return [...livros].sort(() => Math.random() - 0.5);
}

function Categoria({
  titulo = 'Explore por categoria',
  subtitulo = 'Encontre livros organizados por assunto.',
}) {
  const [favoritos, alternarFavorito] = useFavoritos();
  const [itensSacola, alternarSacola] = useSacola();
  const [livrosEmbaralhados] = useState(() => embaralharLivros(catalogoLivros));

  return (
    <main className='pagina pagina-categorias'>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
      <div className='categorias-livros'>
        {categorias.map((categoria) => {
          const livrosDaCategoria = livrosEmbaralhados.filter(
            (livro) => livro.categoria === categoria.nome
          );

          return (
            <section className='grupo-categoria' key={categoria.id}>
              <div className='cabecalho-categoria'>
                <h2>{categoria.nome}</h2>
                <span>{livrosDaCategoria.length} livros</span>
              </div>
              <ListaLivros
                livros={livrosDaCategoria}
                modo='categoria'
                favoritos={favoritos}
                itensSacola={itensSacola}
                onAlternarFavorito={alternarFavorito}
                onAdicionarSacola={alternarSacola}
              />
            </section>
          );
        })}
      </div>
    </main>
  );
}

export default Categoria;
