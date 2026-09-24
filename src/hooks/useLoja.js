import { useEffect, useState } from 'react';
import { catalogoLivros } from '../dados/catalogoLivros';

// Estado compartilhado entre rotas via localStorage: cada página lê o que precisa ao montar.
function useArmazenado(chave, inicial) {
  const [valor, setValor] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(chave)) ?? inicial();
    } catch {
      return inicial();
    }
  });

  useEffect(() => {
    localStorage.setItem(chave, JSON.stringify(valor));
  }, [chave, valor]);

  return [valor, setValor];
}

export function useFavoritos() {
  const [favoritos, setFavoritos] = useArmazenado('booksia-favoritos', () => []);

  function alternarFavorito(livro) {
    setFavoritos((atuais) => (
      atuais.some(({ id }) => id === livro.id)
        ? atuais.filter(({ id }) => id !== livro.id)
        : [...atuais, livro]
    ));
  }

  return [favoritos, alternarFavorito];
}

export function useSacola() {
  const [itensSacola, setItensSacola] = useArmazenado('booksia-sacola', () => []);

  function alternarSacola(livro) {
    setItensSacola((atuais) => (
      atuais.some(({ id }) => id === livro.id)
        ? atuais.filter(({ id }) => id !== livro.id)
        : [...atuais, { ...livro, quantidade: 1 }]
    ));
  }

  return [itensSacola, alternarSacola, setItensSacola];
}

export function useLivrosComprados() {
  return useArmazenado('booksia-comprados', () => (
    catalogoLivros.slice(0, 3).map((livro) => ({ ...livro, quantidade: 1 }))
  ));
}
