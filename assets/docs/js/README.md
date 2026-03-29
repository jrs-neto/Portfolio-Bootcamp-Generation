# Documentação do JavaScript - Projeto Portfólio

------

## 1. Manipulação do DOM

| **Comando / Método**          | **Função / Descrição**                                    | **Categoria / Tipo**    | **Exemplo no Código**                                        |
| ----------------------------- | --------------------------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| `document.querySelector()`    | Seleciona o primeiro elemento com base em um seletor CSS. | Seleção de elementos    | `const about = document.querySelector('#about');`            |
| `document.querySelectorAll()` | Seleciona todos os elementos que correspondem ao seletor. | Seleção múltipla        | `document.querySelectorAll('form span')`                     |
| `innerHTML`                   | Define ou substitui o conteúdo HTML de um elemento.       | Manipulação de conteúdo | `about.innerHTML = \`...`;`                                  |
| `addEventListener()`          | Adiciona um ouvinte de evento a um elemento.              | Eventos                 | `formulario.addEventListener('submit', function(event){...});` |
| `event.preventDefault()`      | Impede o comportamento padrão do evento.                  | Controle de evento      | `event.preventDefault();`                                    |
| `focus()`                     | Define o foco em um campo do formulário.                  | Interação com input     | `nome.focus();`                                              |
| `disabled`                    | Habilita ou desabilita um botão.                          | Controle de estado      | `submitButton.disabled = true;`                              |
| `textContent`                 | Altera o texto de um elemento.                            | Manipulação de texto    | `submitButton.textContent = 'Enviando...';`                  |

------

## 2. Estruturas e Recursos da Linguagem

| **Comando / Método**          | **Função / Descrição**                            | **Categoria / Tipo** | **Exemplo no Código**                           |
| ----------------------------- | ------------------------------------------------- | -------------------- | ----------------------------------------------- |
| `if`                          | Estrutura condicional para validações.            | Controle de fluxo    | `if (nome.value.trim().length < 3)`             |
| `try / catch`                 | Captura e trata erros em operações assíncronas.   | Tratamento de erros  | `try { ... } catch (error) { ... }`             |
| `forEach()`                   | Percorre cada item de um array.                   | Iteração             | `repositorios.forEach(repositorio => { ... });` |
| Operador ternário `? :`       | Executa condição simplificada.                    | Condicional          | `texto.length > limite ? ... : ...`             |
| Encadeamento opcional `?.`    | Evita erro caso a propriedade seja indefinida.    | Segurança de acesso  | `repositorio.topics?.length`                    |
| Operador de coalescência `??` | Define valor padrão se for `null` ou `undefined`. | Valor padrão         | `linguagens[linguagem] ?? linguagens['GitHub']` |
| `trim()`                      | Remove espaços no início e fim da string.         | Manipulação de texto | `email.value.trim()`                            |
| `toUpperCase()`               | Converte texto para maiúsculo.                    | Formatação de texto  | `.toUpperCase()`                                |
| `replace()`                   | Substitui partes de uma string.                   | Manipulação de texto | `.replace(/[-_]/g, ' ')`                        |
| `substring()`                 | Retorna parte de uma string.                      | Manipulação de texto | `texto.substring(0, limite)`                    |

------

## 3. Requisições HTTP (API GitHub)

| **Comando / Método** | **Função / Descrição**                           | **Categoria / Tipo** | **Exemplo no Código**                             |
| -------------------- | ------------------------------------------------ | -------------------- | ------------------------------------------------- |
| `fetch()`            | Realiza requisição HTTP para API externa.        | Requisição HTTP      | `await fetch('https://api.github.com/users/...')` |
| `await`              | Aguarda a resolução de uma Promise.              | Assíncrono           | `const resposta = await fetch(...);`              |
| `.json()`            | Converte resposta da API para objeto JavaScript. | Conversão de dados   | `await resposta.json();`                          |
| `async function`     | Declara função assíncrona.                       | Função assíncrona    | `async function getProjectsGithub(){...}`         |
| `console.error()`    | Exibe erro no console.                           | Depuração            | `console.error('Erro...', error);`                |

------

## 4. Manipulação de Arrays e Objetos

| **Comando / Método** | **Função / Descrição**                      | **Categoria / Tipo** | **Exemplo no Código**                               |
| -------------------- | ------------------------------------------- | -------------------- | --------------------------------------------------- |
| `slice()`            | Retorna parte de um array.                  | Manipulação de array | `repositorio.topics.slice(0, 3)`                    |
| `map()`              | Cria novo array transformando elementos.    | Transformação        | `.map(topic => \`${topic}`)`                        |
| `join()`             | Concatena elementos de um array em string.  | Conversão            | `.join('')`                                         |
| Objeto literal `{}`  | Estrutura chave-valor para armazenar dados. | Estrutura de dados   | `const linguagens = { 'JavaScript': 'javascript' }` |

------

## 5. Expressões Regulares (Regex)

| **Elemento**                                      | **Função / Descrição**                     | **Categoria / Tipo** | **Exemplo no Código**                  |
| ------------------------------------------------- | ------------------------------------------ | -------------------- | -------------------------------------- |
| `/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/` | Validação de formato de e-mail.            | Expressão Regular    | `email.value.trim().match(emailRegex)` |
| `/[-_]/g`                                         | Substitui hífens e underscores por espaço. | Regex global         | `.replace(/[-_]/g, ' ')`               |
| `/[^a-zA-Z0-9\s]/g`                               | Remove caracteres especiais.               | Regex de limpeza     | `.replace(/[^a-zA-Z0-9\s]/g, '')`      |

------

## 6. Criação Dinâmica de Conteúdo

| **Recurso**                           | **Função / Descrição**                               | **Categoria / Tipo** | **Exemplo no Código**                    |
| ------------------------------------- | ---------------------------------------------------- | -------------------- | ---------------------------------------- |
| Template String ``texto ${variavel}`` | Permite interpolação de variáveis dentro de strings. | Interpolação         | ``<img src="${perfil.avatar_url}">``     |
| `+=`                                  | Adiciona conteúdo ao HTML existente.                 | Concatenação         | `swiperWrapper.innerHTML += \`...`;`     |
| Arrow Function `() => {}`             | Forma simplificada de declarar funções.              | Função moderna       | `const truncar = (texto, limite) => ...` |

------

## 7. Integração com Biblioteca Externa

| **Recurso**    | **Função / Descrição**                           | **Categoria / Tipo** | **Exemplo no Código**                    |
| -------------- | ------------------------------------------------ | -------------------- | ---------------------------------------- |
| `new Swiper()` | Inicializa o carrossel de projetos.              | Biblioteca externa   | `new Swiper('.projects-swiper', {...});` |
| `breakpoints`  | Configura comportamento responsivo do carrossel. | Responsividade       | `breakpoints: { 769: {...} }`            |
| `autoplay`     | Define rotação automática dos slides.            | Automação            | `autoplay: { delay: 5000 }`              |
| `navigation`   | Define botões de navegação do carrossel.         | Navegação            | `nextEl: '.swiper-button-next'`          |
| `pagination`   | Configura paginação dinâmica.                    | Paginação            | `clickable: true`                        |

------

## 8. Funções Implementadas

| **Função**              | **Função / Descrição**                                   | **Categoria**      | **Observação**                                |
| ----------------------- | -------------------------------------------------------- | ------------------ | --------------------------------------------- |
| `getAboutGithub()`      | Busca dados do perfil do GitHub e monta a seção "Sobre". | Assíncrona         | Executada ao carregar o script.               |
| `getProjectsGithub()`   | Busca repositórios e cria os cards dinamicamente.        | Assíncrona         | Limita a 6 repositórios mais recentes.        |
| `iniciarSwiper()`       | Configura e inicia o carrossel de projetos.              | Inicialização      | Executada após gerar os slides.               |
| `truncar()`             | Limita o tamanho da descrição do projeto.                | Função auxiliar    | Adiciona reticências se ultrapassar o limite. |
| Função anônima (submit) | Valida os campos do formulário antes do envio.           | Callback de evento | Desabilita botão durante envio.               |

------

## 9. Variáveis e Constantes

| **Declaração** | **Função / Descrição**                        | **Tipo**        | **Exemplo no Código**    |
| -------------- | --------------------------------------------- | --------------- | ------------------------ |
| `const`        | Declara constante (não pode ser reatribuída). | Escopo de bloco | `const emailRegex = ...` |
| `let`          | Declara variável com escopo de bloco.         | Escopo de bloco | `let isValid = true;`    |

