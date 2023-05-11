import Editora from "../modelo/Editora"

const editoras: Array<Editora> = [
    { codEditora: 1, nome: "Wolters Kluwer" },
    { codEditora: 2, nome: "Pearson" },
    { codEditora: 3, nome: "Grupo Planeta" },
]

class ControleEditoras {
    getEditoras(): Array<Editora> {
        return editoras
    }

    getNomeEditora(codEditora: number): string {
        const editora = editoras.find((e) => e.codEditora === codEditora)
        return editora ? editora.nome : ""
    }

    obterEditoraPorCodigo(codEditora: number): Editora | undefined {
        return editoras.find((e) => e.codEditora === codEditora)
    }
}

export default ControleEditoras






