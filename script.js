/* ------------------------------
   SCRIPT PRINCIPAL
   - Alterna menu mobile
   - Insere ano no rodapé
   - Valida formulário de contato
--------------------------------*/

// Alterna o menu em telas pequenas
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("show"); // Adiciona/remove a classe .show do CSS
  });
}

// Insere o ano atual automaticamente no rodapé
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Validação e feedback do formulário
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio real (sem backend configurado)

    if (formMsg) {
      formMsg.textContent = "Enviando...";
    }

    // Simulação de envio
    setTimeout(() => {
      if (formMsg) {
        formMsg.textContent = "Mensagem enviada com sucesso!";
        formMsg.style.color = "green";
      }
      contactForm.reset();
    }, 1500);
  });
}

  /*--------------------------------
    === Galeria do Inicio ===
    --------------------------------*/
// Seleciona todos os carrosséis
const carrossels = document.querySelectorAll('.carrossel');

carrossels.forEach(carrossel => {
    const track = carrossel.querySelector('.carrossel-track');
    const imagens = Array.from(track.children);
    const nextButton = carrossel.querySelector('.next');
    const prevButton = carrossel.querySelector('.prev');

    let index = 0;

    function atualizarCarrossel() {
        const largura = imagens[0].getBoundingClientRect().width; 
        track.style.transform = `translateX(${-index * largura}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (index < imagens.length - 1) index++;
        atualizarCarrossel();
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) index--;
        atualizarCarrossel();
    });
});