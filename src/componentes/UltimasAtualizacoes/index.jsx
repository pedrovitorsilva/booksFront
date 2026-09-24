import { catalogoLivros } from '../../dados/catalogoLivros';
import ListaLivros from '../ListaLivros';
import Titulo from '../Titulo';
import './estilo.css';

function UltimasAtualizacoes({ favoritos, itensSacola, onAlternarFavorito, onAdicionarSacola }) {
  const livrosAtualizados = [...catalogoLivros].reverse().slice(0, 3);

  return (
    <section className='ultimas-atualizacoes'>
      <Titulo>Últimas atualizações</Titulo>
      <div className='livros-atualizados'>
        <ListaLivros
          livros={livrosAtualizados}
          modo='atualizacao'
          favoritos={favoritos}
          itensSacola={itensSacola}
          onAlternarFavorito={onAlternarFavorito}
          onAdicionarSacola={onAdicionarSacola}
        />
      </div>
    </section>
  );
}

export default UltimasAtualizacoes;
