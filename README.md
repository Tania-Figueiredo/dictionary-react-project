# Dictionary React Project

Este é um projeto React para um dicionário interativo que permite pesquisar palavras e obter definições, sinónimos, partes do discurso, fonética, e imagens relacionadas.

## Funcionalidades

- Pesquisa palavras em inglês e apresenta:
  - Definições principais e adicionais.
  - Fonética da palavra.
  - Listas de adjetivos, substantivos (nouns) e sinónimos.
  - Galeria de imagens relacionada à palavra pesquisada.

## Tecnologias Utilizadas

- **React** — Biblioteca JavaScript para construir a interface de utilizador.
- **Axios** — Cliente HTTP para fazer chamadas às APIs.
- **Bootstrap** — Framework CSS para estilização responsiva e componentes UI.
- **CSS personalizado** — Para personalizar cores, tipografia e layout.

## APIs Utilizadas

- [DictionaryAPI.dev](https://dictionaryapi.dev/)  
  API gratuita para obter definições, fonética, exemplos, e sinónimos das palavras. Pertence à comunidade open-source e é mantida por voluntários.

- [Pexels API](https://www.pexels.com/api/)  
  API para obter imagens gratuitas de alta qualidade relacionadas às palavras pesquisadas. As imagens são disponibilizadas pela Pexels, um serviço de fotos e vídeos stock gratuitos.

> **Nota:** As chaves de API para a Pexels são necessárias para autenticação e devem ser configuradas no ficheiro `.env` local, que **não** deve ser incluído no repositório público.

## Como Usar

1. Clona este repositório:
   ```bash
   git clone https://github.com/Tania-Figueiredo/dictionary-react-project.git
   ```
