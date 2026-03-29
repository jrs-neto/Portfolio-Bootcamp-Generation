<h1>Documentação do CSS - Projeto Portfólio</h1>



<h2>1. Regras CSS utilizadas</h2>

<br />

🎨 **Espaçamento e Tamanho**

| **Propriedade**            | **Descrição**                          | **Opções**                   | **Exemplo de Uso**             |
| -------------------------- | -------------------------------------- | ---------------------------- | ------------------------------ |
| `margin`                   | Espaço externo entre elementos.        | 1 a 4 valores                | `margin: 1rem 2rem 3rem 4rem;` |
| `padding`                  | Espaço interno entre conteúdo e borda. | 1 a 4 valores                | `padding: 0.5rem 1rem;`        |
| `width` / `height`         | Define tamanho do elemento.            | `%`, `px`, `rem`, `vh`, `vw` | `width: 100%;`                 |
| `max-width` / `min-height` | Limites máximo e mínimo.               | `px`, `rem`, `vh`            | `min-height: 100vh;`           |
| `gap`                      | Espaço entre elementos (flex/grid).    | `px`, `rem`                  | `gap: 1rem;`                   |

<br />

### 🧩 **Layout e Estrutura**

| **Propriedade**         | **Descrição**                   | **Opções**                       | **Exemplo**                       |
| ----------------------- | ------------------------------- | -------------------------------- | --------------------------------- |
| `display`               | Define o tipo de layout         | `flex`, `grid`, `block`          | `display: flex;`                  |
| `flex-direction`        | Direção do eixo                 | `row`, `column`                  | `flex-direction: column;`         |
| `flex`                  | Atalho de crescimento e tamanho | `1`, `auto`                      | `flex: 1;`                        |
| `flex-wrap`             | Quebra de linha                 | `wrap`, `nowrap`                 | `flex-wrap: wrap;`                |
| `justify-content`       | Alinhamento horizontal          | `center`, `space-between`        | `justify-content: center;`        |
| `align-items`           | Alinhamento vertical            | `center`, `stretch`              | `align-items: center;`            |
| `grid-template-columns` | Colunas do grid                 | `1fr`, `repeat()`                | `grid-template-columns: 1fr 1fr;` |
| `position`              | Posicionamento                  | `relative`, `absolute`, `sticky` | `position: sticky;`               |
| `top/right/bottom/left` | Deslocamento                    | `px`, `%`                        | `top: 0;`                         |
| `z-index`               | Ordem de camadas                | números                          | `z-index: 1000;`                  |
| `overflow`              | Conteúdo excedente              | `hidden`, `auto`                 | `overflow: hidden;`               |
| `scroll-behavior`       | Rolagem suave                   | `smooth`                         | `scroll-behavior: smooth;`        |
| `scroll-margin-top`     | Ajuste ao rolar                 | `px`, `rem`                      | `scroll-margin-top: 6rem;`        |

<br />

### ⚙️ **Reset e Configuração Global**

| **Propriedade** | **Descrição**                                | **Exemplo**               |
| --------------- | -------------------------------------------- | ------------------------- |
| `box-sizing`    | Inclui padding e borda no cálculo do tamanho | `box-sizing: border-box;` |
| `outline`       | Remove contorno padrão                       | `outline: none;`          |

<br />

### 🧱 **Bordas e Sombras**

| **Propriedade** | **Descrição**         | **Exemplo**                               |
| --------------- | --------------------- | ----------------------------------------- |
| `border`        | Define borda completa | `border: 1px solid #000;`                 |
| `border-bottom` | Borda inferior        | `border-bottom: 2px solid #ccc;`          |
| `border-radius` | Arredonda cantos      | `border-radius: 1rem;`                    |
| `box-shadow`    | Sombra do elemento    | `box-shadow: 0 4px 10px rgba(0,0,0,0.2);` |

<br />

### 🎨 **Fundo e Cores**

| **Propriedade**       | **Descrição**     | **Exemplo**                         |
| --------------------- | ----------------- | ----------------------------------- |
| `background-color`    | Cor de fundo      | `background-color: #fff;`           |
| `background`          | Atalho para fundo | `background: linear-gradient(...);` |
| `background-image`    | Imagem de fundo   | `url(img.jpg)`                      |
| `background-size`     | Tamanho da imagem | `cover`                             |
| `background-position` | Posição da imagem | `center`                            |
| `background-repeat`   | Repetição         | `no-repeat`                         |
| `color`               | Cor do texto      | `color: #333;`                      |

<br />

### ✍️ **Texto e Tipografia**

| **Propriedade**   | **Descrição**   | **Exemplo**               |
| ----------------- | --------------- | ------------------------- |
| `font-family`     | Fonte           | `font-family: 'Poppins';` |
| `font-size`       | Tamanho         | `font-size: 1rem;`        |
| `font-weight`     | Peso            | `font-weight: 700;`       |
| `line-height`     | Altura da linha | `line-height: 1.6;`       |
| `text-align`      | Alinhamento     | `text-align: center;`     |
| `text-decoration` | Decoração       | `text-decoration: none;`  |
| `list-style`      | Marcadores      | `list-style: none;`       |
| `white-space`     | Quebra de linha | `white-space: nowrap;`    |
| `cursor`          | Tipo de cursor  | `cursor: pointer;`        |

<br />

### 🖼 **Imagens e Conteúdo**

| **Propriedade** | **Descrição**    | **Exemplo**          |
| --------------- | ---------------- | -------------------- |
| `object-fit`    | Ajuste da imagem | `object-fit: cover;` |

<br />

### 🎞 **Efeitos e Animações**

| **Propriedade** | **Descrição**    | **Exemplo**                     |
| --------------- | ---------------- | ------------------------------- |
| `transition`    | Transição suave  | `transition: all 0.3s ease;`    |
| `transform`     | Transformações   | `transform: translateY(-5px);`  |
| `animation`     | Executa animação | `animation: float 3s infinite;` |
| `@keyframes`    | Define animação  | `@keyframes float {}`           |
| `filter`        | Filtros visuais  | `filter: brightness(0);`        |

<br />

### 🧮 **Funções CSS**

| **Função** | **Descrição**     | **Exemplo**                   |
| ---------- | ----------------- | ----------------------------- |
| `var()`    | Usa variáveis CSS | `color: var(--purple-500);`   |
| `calc()`   | Calcula valores   | `height: calc(100vh - 5rem);` |

<br />

### 🎯 **Pseudo-classes e Elementos**

| **Seletor** | **Descrição**          | **Exemplo**   |
| ----------- | ---------------------- | ------------- |
| `:hover`    | Ao passar o mouse      | `.btn:hover`  |
| `:focus`    | Campo ativo            | `input:focus` |
| `:after`    | Conteúdo após elemento | `.item:after` |

<br />

### 📱 **Responsividade**

| **Regra** | **Descrição**       | **Exemplo**                 |
| --------- | ------------------- | --------------------------- |
| `@media`  | Regras condicionais | `@media (max-width: 768px)` |

<br />

<h2>2. Classes Criadas em styles.css</h2>



### ✅ **Classes e Seletores CSS**

| **Classe / Seletor**               | **Função / Descrição**         | **Usada em**      | **Exemplo de uso no HTML**                |
| ---------------------------------- | ------------------------------ | ----------------- | ----------------------------------------- |
| `.section-container`               | Container padrão das seções.   | `<section>`       | `<section class="section-container">`     |
| `.buttons-container`               | Agrupa botões com espaçamento. | `<div>`           | `<div class="buttons-container">`         |
| `.botao`                           | Botão principal.               | `<a>`, `<button>` | `<a class="botao">`                       |
| `.botao:hover`                     | Efeito ao passar o mouse.      | Botões            | —                                         |
| `.botao-outline`                   | Botão secundário.              | `<button>`        | `<button class="botao-outline">`          |
| `.botao-outline:hover`             | Hover do botão outline.        | Botões            | —                                         |
| `.botao.botao-sm`                  | Botão pequeno.                 | `<a>`             | `<a class="botao botao-sm">`              |
| `.botao-outline.botao-sm`          | Botão outline pequeno.         | `<button>`        | `<button class="botao-outline botao-sm">` |
| `header`                           | Cabeçalho fixo.                | `<header>`        | `<header>`                                |
| `header a`                         | Links do header.               | `<a>`             | `<a>`                                     |
| `header a:hover`                   | Hover dos links.               | `<a>`             | —                                         |
| `#titulo`                          | Título principal.              | `<h1>`            | `<h1 id="titulo">`                        |
| `.menu-content`                    | Container do menu.             | `<div>`           | `<div class="menu-content">`              |
| `.menu-list`                       | Lista de navegação.            | `<ul>`            | `<ul class="menu-list">`                  |
| `.menu-list a`                     | Links do menu.                 | `<a>`             | `<a>`                                     |
| `.hero-container`                  | Seção hero.                    | `<section>`       | `<section class="hero-container">`        |
| `.hero-content`                    | Conteúdo textual.              | `<div>`           | `<div class="hero-content">`              |
| `.hero-content span`               | Subtítulo.                     | `<span>`          | `<span>`                                  |
| `.hero-content h1`                 | Título principal.              | `<h1>`            | `<h1>`                                    |
| `.hero-content p`                  | Parágrafo da hero.             | `<p>`             | `<p>`                                     |
| `.hero-image`                      | Container da imagem.           | `<div>`           | `<div class="hero-image">`                |
| `.hero-image img`                  | Imagem da hero.                | `<img>`           | `<img>`                                   |
| `.float-animation`                 | Animação de flutuação.         | `<img>`           | `<img class="float-animation">`           |
| `.about-container`                 | Seção sobre.                   | `<section>`       | `<section class="about-container">`       |
| `.about-image`                     | Container da imagem.           | `<div>`           | `<div class="about-image">`               |
| `.about-image img`                 | Imagem de perfil.              | `<img>`           | `<img>`                                   |
| `.about-content`                   | Conteúdo textual.              | `<div>`           | `<div class="about-content">`             |
| `.about-content h2`                | Título da seção.               | `<h2>`            | `<h2>`                                    |
| `.about-content p`                 | Texto da seção.                | `<p>`             | `<p>`                                     |
| `.about-buttons-data`              | Botões + dados.                | `<div>`           | `<div class="about-buttons-data">`        |
| `.about-buttons-data .botao`       | Botão alinhado.                | `<a>`             | `<a class="botao">`                       |
| `.data-container`                  | Container de estatísticas.     | `<div>`           | `<div class="data-container">`            |
| `.data-item`                       | Item de estatística.           | `<div>`           | `<div class="data-item">`                 |
| `.data-number`                     | Número destacado.              | `<p>`             | `<p class="data-number">`                 |
| `.data-label`                      | Texto do número.               | `<p>`             | `<p class="data-label">`                  |
| `.projects-container`              | Seção de projetos.             | `<section>`       | `<section class="projects-container">`    |
| `.projects-container h2`           | Título da seção.               | `<h2>`            | `<h2>`                                    |
| `.projects-swiper`                 | Container do carrossel.        | `<div>`           | `<div class="projects-swiper">`           |
| `.project-card`                    | Card de projeto.               | `<div>`           | `<div class="project-card">`              |
| `.project-card:hover`              | Hover do card.                 | `<div>`           | —                                         |
| `.project-image`                   | Container da imagem.           | `<div>`           | `<div class="project-image">`             |
| `.project-image img`               | Imagem do projeto.             | `<img>`           | `<img>`                                   |
| `.project-content`                 | Conteúdo do card.              | `<div>`           | `<div class="project-content">`           |
| `.project-content h3`              | Título do projeto.             | `<h3>`            | `<h3>`                                    |
| `.project-content p`               | Descrição do projeto.          | `<p>`             | `<p>`                                     |
| `.project-tags`                    | Container de tags.             | `<div>`           | `<div class="project-tags">`              |
| `.tag`                             | Tag individual.                | `<span>`          | `<span class="tag">`                      |
| `.project-buttons`                 | Botões do card.                | `<div>`           | `<div class="project-buttons">`           |
| `.swiper-wrapper`                  | Wrapper do Swiper.             | `<div>`           | `<div class="swiper-wrapper">`            |
| `.swiper-slide`                    | Slide.                         | `<div>`           | `<div class="swiper-slide">`              |
| `.swiper-button-next`              | Botão próximo.                 | `<div>`           | `<div class="swiper-button-next">`        |
| `.swiper-button-prev`              | Botão anterior.                | `<div>`           | `<div class="swiper-button-prev">`        |
| `.swiper-button-next:after`        | Ícone do botão next.           | Swiper            | —                                         |
| `.swiper-button-prev:after`        | Ícone do botão prev.           | Swiper            | —                                         |
| `.swiper-pagination-bullet`        | Indicador.                     | `<span>`          | `<span>`                                  |
| `.swiper-pagination-bullet-active` | Indicador ativo.               | `<span>`          | `<span>`                                  |
| `.contact-container`               | Seção contato (grid).          | `<section>`       | `<section class="contact-container">`     |
| `.contact-info`                    | Informações.                   | `<div>`           | `<div class="contact-info">`              |
| `.contact-info h2`                 | Título contato.                | `<h2>`            | `<h2>`                                    |
| `.contact-info p`                  | Texto contato.                 | `<p>`             | `<p>`                                     |
| `.social-container`                | Redes sociais.                 | `<div>`           | `<div class="social-container">`          |
| `.social-icon`                     | Ícone social.                  | `<a>`             | `<a class="social-icon">`                 |
| `.social-icon img`                 | Imagem do ícone.               | `<img>`           | `<img>`                                   |
| `.social-icon:hover img`           | Efeito no ícone.               | `<img>`           | —                                         |
| `form`                             | Formulário.                    | `<form>`          | `<form>`                                  |
| `form label`                       | Label.                         | `<label>`         | `<label>`                                 |
| `form input`                       | Input.                         | `<input>`         | `<input>`                                 |
| `form textarea`                    | Textarea.                      | `<textarea>`      | `<textarea>`                              |
| `form input:focus`                 | Foco input.                    | `<input>`         | —                                         |
| `form textarea:focus`              | Foco textarea.                 | `<textarea>`      | —                                         |
| `form span`                        | Mensagem erro.                 | `<span>`          | `<span>`                                  |
| `footer`                           | Rodapé.                        | `<footer>`        | `<footer>`                                |
| `.success-container`               | Container da página sucesso.   | `<section>`       | `<section class="success-container">`     |
| `.success-content`                 | Conteúdo central.              | `<div>`           | `<div class="success-content">`           |
| `.success-content h1`              | Título sucesso.                | `<h1>`            | `<h1>`                                    |
| `.success-content h2`              | Subtítulo sucesso.             | `<h2>`            | `<h2>`                                    |
| `.success-icon`                    | Ícone.                         | `<div>`           | `<div class="success-icon">`              |
| `.success-icon img`                | Imagem do ícone.               | `<img>`           | `<img>`                                   |

<br />

### ✅ **Regras Especiais e Estruturais**

| **Regra / Seletor**                     | **Função**              | **Descrição**                                                |
| --------------------------------------- | ----------------------- | ------------------------------------------------------------ |
| `*`                                     | Reset global            | Remove margens e paddings padrão, define `box-sizing` e padroniza fonte e comportamento inicial dos elementos. |
| `:root`                                 | Variáveis globais       | Define cores, espaçamentos, fontes, sombras e transições reutilizáveis com `var()`. |
| `@media screen and (max-width: 1024px)` | Responsividade (tablet) | Ajusta layout, tipografia e espaçamentos para telas médias.  |
| `@media (max-width: 768px)`             | Responsividade (menu)   | Oculta o menu de navegação em telas menores.                 |
| `@media screen and (max-width: 480px)`  | Responsividade (mobile) | Adapta layout completo para dispositivos móveis.             |