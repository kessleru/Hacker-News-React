# Hacker News (UK News) — Em construção...
App React que lista as _new stories_ do Hacker News e mostra título, domínio, autor e tempo relativo (min/h atrás). Os dados vêm da API oficial do Hacker News (Firebase) e o projeto usa Vite + Tailwind.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Axios (requests HTTP)
- ESLint + Prettier (padronização)

## Requisitos

- Node.js (recomendado: LTS)
- npm (ou equivalente)

## Como rodar

Instalar dependências:

```bash
npm install
```

Ambiente de desenvolvimento:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Pré-visualização do build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## O que o app faz

- Busca a lista de IDs em `newstories.json`
- Pega os detalhes de cada item via `item/<id>.json`
- Renderiza uma lista numerada (top 20 por padrão)
- Cada item mostra:
  - título (link para a URL original)
  - domínio (ex.: `example.com`)
  - autor (`by`)
  - tempo relativo (ex.: `15 min ago`, `2 h ago`)

Observação: quando está carregando ou dá erro, os componentes retornam `null` (não exibem UI de loading/erro atualmente).

## Estrutura de pastas

- `src/main.jsx`: bootstrap do React e import de fontes
- `src/App.jsx`: compõe layout (`Container`, `Header`, `StoriesContainer`)
- `src/components/`
  - `Header.jsx`: topo com logo e links
  - `Container.jsx`: wrapper com classe `container`
  - `StoriesContainer.jsx`: busca IDs (hook) e renderiza lista
  - `Story.jsx`: busca dados por ID (hook) e renderiza o item
- `src/hooks/`
  - `useAllStories.jsx`: hook que carrega IDs e aplica `limit`
  - `useGetStory.jsx`: hook que carrega um story por ID
- `src/services/hnApi.jsx`: camada de API (Axios) para Hacker News
- `src/utils/`
  - `selectFields.jsx`: “sanitiza”/seleciona campos do payload
  - `getTime.jsx`: converte timestamp Unix em tempo relativo
- `src/styles/index.css`: Tailwind v4 + tema de fontes + utilitário `container`

## Fluxo de dados (alto nível)

1. `StoriesContainer` chama `useStories(20)`
2. `useStories` chama `getStoryIds()` em `src/services/hnApi.jsx`
3. Para cada ID, `Story` chama `useStory(id)`
4. `useStory` chama `getStory(id)` e o service retorna só os campos relevantes via `selectFields`

## API utilizada

- Base URL: `https://hacker-news.firebaseio.com/v0/`
- Endpoints usados:
  - `newstories.json`
  - `item/<id>.json`

## Notas e limitações

- Tempo relativo só trata minutos (< 1h) e horas (>= 1h).
- Não há estado visual de loading/erro (os componentes apenas não renderizam nada).
- Os stories são buscados individualmente (1 request por item).
