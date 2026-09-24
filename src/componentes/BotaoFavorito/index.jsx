import './estilo.css';

function BotaoFavorito({ livro, favoritado, onAlternar }) {
  return (
    <button
      className={`botao-favorito ${favoritado ? 'favoritado' : ''}`}
      type='button'
      onClick={() => onAlternar(livro)}
      aria-pressed={favoritado}
      title={favoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      {favoritado ? 'Favoritado' : 'Favoritar'}
    </button>
  );
}

export default BotaoFavorito;
