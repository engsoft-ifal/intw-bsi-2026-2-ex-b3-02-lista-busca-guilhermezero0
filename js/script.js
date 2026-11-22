// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

// TODO 1: escreva a função render(filtro) que preenche a #lista com um <li>
//         para cada curso cujo NOME contenha o filtro (use filter + map).
//         Se nenhum curso passar, mostre um <li> com "Nada encontrado".
//
// TODO 2: chame render() ao carregar a página e a cada evento "input" na busca.

// escreva seu código aqui
function render(filtro = "") {
  const termo = filtro.trim().toLowerCase();

  const itens = cursos
    .filter((curso) => curso.nome.toLowerCase().includes(termo))
    .map((curso) => `<li>${curso.nome} — ${curso.area}</li>`);

  lista.innerHTML = itens.length > 0 ? itens.join("") : "<li>Nada encontrado</li>";
}

render();

busca.addEventListener("input", (event) => {
  render(event.target.value);
});
