import Editora from "../modelo/Editora"


const editoras: Array<Editora> = [
    {codEditora: 1, nome: "Wolters Kluwer"},
    {codEditora: 2, nome: "Pearson"},
    {codEditora: 3, nome: "Grupo Planeta"},
]



class ControleEditoras{
    getEditoras(): Array<Editora> {
        return editoras
    }


    
    getNomeEditora(codEditora: number): string{
        const editora = editoras.filter((e) => e.codEditora === codEditora)[0]
        return editoras ? editora.nome : ""
        
    }
 
}

export default ControleEditoras




