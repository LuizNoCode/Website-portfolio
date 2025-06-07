document.addEventListener("DOMContentLoaded", () => {
  
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    link.addEventListener("click", function () {
      links.forEach(l => l.classList.remove("ativo"));
      this.classList.add("ativo");
    });
  });

  const contatoSection = document.querySelector("#contato");

  const linksContato = [
    {
      texto: "Instagram",
      url: "https://www.instagram.com/_luizfelipegoncalves_",
      cor: "#add8e6"
    },
    {
      texto: "LinkedIn",
      url: "https://www.linkedin.com/in/luiz-felipe-siqueira-gonçalves",
      cor: "#b0c4de"
    },
    {
      texto: "GitHub",
      url: "https://github.com/LuizNoCode",
      cor: "#d6eaf8"
    }
  ];

  linksContato.forEach(({ texto, url, cor }) => {
    const btn = document.createElement("button");
    btn.textContent = `Abrir ${texto}`;
    Object.assign(btn.style, {
      margin: "0.5rem",
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: "8px",
      backgroundColor: cor,
      color: "#003366",
      cursor: "pointer"
    });
    btn.onclick = () => window.open(url, "_blank");
    contatoSection.appendChild(btn);
  });
});
