package com.mycompany.cadastropoo.model;

import java.util.ArrayList;
import java.util.List;

public class PessoaJuridicaRepo {
    private List<PessoaJuridica> pessoas;

    public PessoaJuridicaRepo() {
        pessoas = new ArrayList<>();
    }

    public void inserir(PessoaJuridica pessoa) {
        pessoas.add(pessoa);
    }

    // Outros métodos para buscar, atualizar e excluir pessoas jurídicas...
}
