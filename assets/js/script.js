// Seção about
const about = document.querySelector("#about");

// Seção projects
const swiperWrapper = document.querySelector(".swiper-wrapper");

// Formulário
const formulario = document.querySelector("#formulario");

// Expressão Regular de validação do e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Função de preenchimento da seção about
async function getAboutGitHub() {
  try {
    const resposta = await fetch("https://api.github.com/users/jrs-neto");
    const perfil = await resposta.json();

    about.innerHTML = "";

    about.innerHTML = `
      <figure class="about-image">
        <img src="${perfil.avatar_url}" alt="${perfil.name}">
      </figure>

      <article class="about-content">
        <h2>Sobre mim</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div class="about-buttons-data">
          <div class="buttons-container">
            <a href="${perfil.html_url}" target="_blank" class="botao">GitHub</a>
            <a href="https://drive.google.com/drive/folders/1D8wHplySJvqn6GL273GQbGKQfpA0LRTn?usp=sharing" target="_blank" class="botao-outline">Currículo</a>
          </div>

          <div class="data-container">
            <div class="data-item">
              <span class="data-number">${perfil.followers}</span>
              <span class="data-label">Seguidores</span>
            </div>

            <div class="data-item">
              <span class="data-number">${perfil.public_repos}</span>
              <span class="data-label">Repositórios</span>
            </div>
          </div>
        </div>
      </article>
    `;
  } catch (error) {
    console.error("Erro ao buscar dados no GitHub", error);
  }
}

// Função buscar os dados dos projetos
async function getProjectsGitHub() {
  try {
    const resposta = await fetch("https://api.github.com/users/jrs-neto/repos?sort=pushed&per_page=6");

    const repositorios = await resposta.json();

    swiperWrapper.innerHTML = "";

    const linguagens = {
      JavaScript: "javascript",
      TypeScript: "typescript",
      Python: "python",
      Java: "java",
      HTML: "html",
      CSS: "css",
      PHP: "php",
      "C#": "csharp",
      Go: "go",
      Kotlin: "kotlin",
      Swift: "swift",
      C: "c",
      "C++": "c_plus",
      GitHub: "github",
    };

    repositorios.forEach((repositorio) => {
      const linguagem = repositorio.language || "GitHub";
      const icone = linguagens[linguagem] ?? linguagens["GitHub"];
      const urlIcone = `./assets/icons/languages/${icone}.svg`;

      const nomeFormatado = repositorio.name
        .replace(/[-_]/g, " ")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .toUpperCase();

      const truncar = (texto, limite) => (texto.length > limite ? texto.substring(0, limite) + "..." : texto);

      const descricao = repositorio.description
        ? truncar(repositorio.description, 100)
        : "Projeto desenvolvido no GitHub";

      const tags =
        repositorio.topics?.length > 0
          ? repositorio.topics
              .slice(0, 3)
              .map((topic) => `<span class="tag">${topic}</span>`)
              .join("")
          : `<span class="tag">${linguagem}</span>`;

      const botaoDeploy = repositorio.homepage
        ? `<a href="${repositorio.homepage}" target="_blank" class="botao-outline botao-sm">Deploy</a>`
        : "";

      const botoesAcao = `
        <div class="project-buttons">
          <a href="${repositorio.html_url}" target="_blank" class="botao botao-sm">
            GitHub
          </a>
          ${botaoDeploy}
        </div>
      `;

      swiperWrapper.innerHTML += `
        <div class="swiper-slide">
          <article class="project-card">

            <figure class="project-image">
              <img src="${urlIcone}" alt="Ícone - ${linguagem}">
            </figure>

            <div class="project-content">
              <h3>${nomeFormatado}</h3>
              <p>${descricao}</p>

              <div class="project-tags">
                ${tags}
              </div>

              ${botoesAcao}
            </div>

          </article>
        </div>
      `;
    });

    iniciarSwiper();
  } catch (error) {
    console.error("Erro ao buscar dados no GitHub", error);
  }
}

function iniciarSwiper() {
  new Swiper(".projects-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    loop: true,
    watchOverflow: true,

    breakpoints: {
      0: { slidesPerView: 1 },
      769: { slidesPerView: 2 },
      1025: { slidesPerView: 3 },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },

    grabCursor: true,
  });
}

// Validação do formulário
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  document.querySelectorAll("form span").forEach((span) => (span.innerHTML = ""));

  let isValid = true;

  const nome = document.querySelector("#nome");
  const erroNome = document.querySelector("#erro-nome");

  if (nome.value.trim().length < 3) {
    erroNome.innerHTML = "O nome deve ter no mínimo 3 caracteres";
    if (isValid) nome.focus();
    isValid = false;
  }

  const email = document.querySelector("#email");
  const erroEmail = document.querySelector("#erro-email");

  if (!email.value.trim().match(emailRegex)) {
    erroEmail.innerHTML = "Digite um endereço de e-mail válido";
    if (isValid) email.focus();
    isValid = false;
  }

  const assunto = document.querySelector("#assunto");
  const erroAssunto = document.querySelector("#erro-assunto");

  if (assunto.value.trim().length < 5) {
    erroAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres";
    if (isValid) assunto.focus();
    isValid = false;
  }

  const mensagem = document.querySelector("#mensagem");
  const erroMensagem = document.querySelector("#erro-mensagem");

  if (mensagem.value.trim().length === 0) {
    erroMensagem.innerHTML = "A mensagem não pode ser vazia";
    if (isValid) mensagem.focus();
    isValid = false;
  }

  if (isValid) {
    const submitButton = formulario.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";

    formulario.submit();
  }
});

// Executar funções
getAboutGitHub();
getProjectsGitHub();
