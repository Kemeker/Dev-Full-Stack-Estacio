import React from "react"
import { useNavigate } from "react-router-dom"
import LivroLista from './LivroLista';


function LivroDados() {
  const controleLivro = new ControladorLivros();
  const controleEditora = new ControladorEditoras();
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();

    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split("\n"),
      codEditora,
    };

    controleLivro.incluir(livro);
    navigate("/");
  };

  return (
    <main>
      <h2>Novo Livro</h2>
      <form onSubmit={incluir}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="resumo">Resumo:</label>
          <textarea
            id="resumo"
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="autores">Autores:</label>
          <textarea
            id="autores"
            value={autores}
            onChange={(event) => setAutores(event.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="editora">Editora:</label>
          <select id="editora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Incluir</button>
      </form>
    </main>
  );
}

export default LivroDados;


