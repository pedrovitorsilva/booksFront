import Pesquisar from '../../componentes/Pesquisar';
import UltimasAtualizacoes from '../../componentes/UltimasAtualizacoes';
import CardRecomenda from '../../componentes/CardRecomenda';
import { catalogoLivros } from '../../dados/catalogoLivros';

function Home({ favoritos, itensSacola, onAlternarFavorito, onAdicionarSacola }) {
  const propsLivros = { favoritos, itensSacola, onAlternarFavorito, onAdicionarSacola };

  return (
    <>
      <Pesquisar livros={catalogoLivros} {...propsLivros} />
      <CardRecomenda
        titulo={catalogoLivros[0].titulo}
        subtitulo='Aprenda novas ideias e evolua seus projetos com esta leitura.'
        src={catalogoLivros[0].capa}
      />
      <UltimasAtualizacoes {...propsLivros} />
    </>
  );
}

export default Home;
