Revise o código enviado com foco em **padronização, coerência e qualidade estrutural**.

### Objetivos

* Padronizar **CSS, componentes, nomenclatura e estrutura dos arquivos**.
* Identificar e corrigir **erros, inconsistências e despadronizações**.
* Simplificar estruturas quando possível, **sem alterar o comportamento ou resultado final**.
* Manter consistência entre componentes, estilos e padrões de React utilizados no projeto.

### React

Mapeie **todos os conceitos e recursos de React presentes no código**, incluindo, quando aplicável:

* `useState`, `useEffect` e outros Hooks
* Props
* Componentização
* Reutilização de componentes
* Roteamento
* Comunicação entre componentes

Use também a documentação do W3Schools como referência para identificar assuntos adicionais relevantes:
[W3Schools — React Tutorial](https://www.w3schools.com/React/Default.ASP?utm_source=chatgpt.com)

### Saída

1. **Tabela de conceitos React:** assunto, breve descriçao.
2. **Código corrigido/refatorado**, quando necessário, preservando o comportamento existente.

Priorize soluções **simples, consistentes e idiomáticas em React**, evitando abstrações desnecessárias.

---

# Resultado - Saída

| Assunto  | Descrição / onde aparece |                 
| ---------| ------------------------ |
| **Componentes de função**✅              | Todos os componentes, com `export default`.                                                                                                                                                   |
| **JSX**✅                                | Expressões em `{}`, atributos como `className` e `htmlFor`, renderização condicional com `&&` e ternário.                                                                                     |
| **Fragment (`<>…</>`)**❌                | `Home` e `ListaLivros` retornam vários elementos sem wrapper.                                                                                                                                 |
| **Props** ✅                             | Passadas de pai para filho, com valores padrão por desestruturação (`modo = 'resultado'`).                                                                                                    |
| **children**✅                           | `Titulo`, `Subtitulo` e `ContainerPesquisar` recebem conteúdo por `children`.                                                                                                                 |
| **useState**✅                           | `favoritos`, `itensSacola`, `livrosComprados` (`App`), formulário e mensagem (`Cadastro`), termo de busca (`Pesquisar`), resultados e `buscaKey` (`Favoritos`).                               |
| **Lazy initial state**❌                 | `useState(lerFavoritos)` e `useState(() => embaralharLivros(livros))`, executados apenas na inicialização.                                                                                    |
| **Atualização funcional de estado**✅    | `setX((atual) => …)`, evitando mutação direta do estado.                                                                                                                                      |
| **useEffect**✅                          | `App` grava favoritos no `localStorage` com dependência `[favoritos]`.                                                                                                                        |
| **Listas e `key`**✅                     | `.map()` com `key={livro.id}` em `ListaLivros`, `Categoria`, `Sacola` e `OpcoesHeader`.                                                                                                       |
| **Eventos** ✅                           | `onClick`, `onChange`, `onSubmit` (com `preventDefault`) e `onError` (capa de fallback).                                                                                                      |
| **Formulário controlado**❌              | `Cadastro`, `Input` e busca usam `value` + `onChange`, com handler único via `name`.                                                                                                          |
| **Lifting state up**✅                   | O estado fica em `App` e é repassado por props. Os filhos comunicam alterações por callbacks `on*` (`onAlternarFavorito`, `onAdicionarSacola`).                                               |
| **Comunicação filho → pai**✅            | `onResultadosChange` em `Pesquisar → Favoritos`, `onAtualizarQuantidade` e `onFinalizarCompra`.                                                                                               |
| **Componentização e reutilização**✅     | `CardLivro` e `ListaLivros` atendem 5 modos (`resultado`, `atualização`, `venda`, `categoria`, `estante`). `Titulo`, `Subtitulo`, `Input` e `BotaoFavorito` são reutilizados em várias telas. |
| **Composição**✅                         | `Header = Logo + OpcoesHeader + IconesHeader`. `Pesquisar = ContainerPesquisar + Input + ListaLivros`.                                                                                        |
| **Roteamento (React Router)**✅          | `BrowserRouter` em `main.jsx`, `Routes`/`Route` em `App` e `Link` na navegação.                                                                                                               |
| **StrictMode**✅                         | Envolve o app em `main.jsx`|
| **Reset por `key`**✅                    | `key={buscaKey}` remonta `Pesquisar` ao clicar em **"Listar todos"**.                                                                                                                         |
| **Valores derivados**❌                  | Subtotal, quantidade total e listas filtradas são calculados no render, sem virar `state`.                                                                                                    |
| **CSS por componente + variáveis CSS**✅ | Cada componente importa seu `style.css`. As variáveis de `:root` armazenam as cores.                                                                                                          |
| **Não utilizados**❌                     | `useRef`, `useContext` (poderia reduzir prop drilling), `useMemo`/`useCallback`, `React.lazy` e rotas dinâmicas (`useParams`).                                                                |

