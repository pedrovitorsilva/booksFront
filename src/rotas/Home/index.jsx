import Pesquisar from '../../componentes/Pesquisar';
import UltimasAtualizacoes from '../../componentes/UltimasAtualizacoes';
import CardRecomenda from '../../componentes/CardRecomenda';
import { catalogoLivros } from '../../dados/catalogoLivros';
import { useFavoritos, useSacola } from '../../hooks/useLoja';

function Home() {
  const [favoritos, alternarFavorito] = useFavoritos();
  const [itensSacola, alternarSacola] = useSacola();
  const propsLivros = {
    favoritos,
    itensSacola,
    onAlternarFavorito: alternarFavorito,
    onAdicionarSacola: alternarSacola,
  };

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
