import {Editora} from "../modelo/Editora"


let editoras: Array<Editora> = [
    {codEditora: 1, nome: "Editora A"},
    {codEditora: 2, nome: "Editora B"},
    {codEditora: 3, nome: "Editora C"},
]

class ControleEditora{
    public getEditoras(): Array<Editora> {
        return editoras

    }

    public getNomeEditora(codEditora: number): string {
        const editora = editoras.find((e) => e.codEditora === codEditora)
        return editora ? editora.nome : ""

    }
}