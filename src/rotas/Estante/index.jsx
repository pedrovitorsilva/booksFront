import ListaLivros from '../../componentes/ListaLivros';
import Titulo from '../../componentes/Titulo';
import Subtitulo from '../../componentes/Subtitulo';
import { useLivrosComprados } from '../../hooks/useLoja';
import './estilo.css';

function Estante() {
  const [livrosComprados] = useLivrosComprados();
  const quantidadeTotal = livrosComprados.reduce(
    (total, livro) => total + (livro.quantidade || 1),
    0
  );

  return (
    <main className='estante'>
      <Titulo>Minha estante</Titulo>
      <Subtitulo>Livros comprados para continuar sua leitura.</Subtitulo>
      <p className='estante-contagem'>{quantidadeTotal} livros comprados</p>
      <div className='estante-livros'>
        <ListaLivros
          livros={livrosComprados}
          modo='venda'
          mostrarQuantidade
          linkCapa
          mostrarFavorito={false}
          mostrarSacola={false}
        />
      </div>
    </main>
  );
}

export default Estante;
