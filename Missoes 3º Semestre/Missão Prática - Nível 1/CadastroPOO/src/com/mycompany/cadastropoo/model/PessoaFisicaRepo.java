package com.mycompany.cadastropoo.model;

import java.util.ArrayList;
import java.util.List;

public class PessoaFisicaRepo {
    private List<PessoaFisica> pessoas;

    public PessoaFisicaRepo() {
        pessoas = new ArrayList<>();
    }

    public void inserir(PessoaFisica pessoa) {
        pessoas.add(pessoa);
    }

    // Outros métodos para buscar, atualizar e excluir pessoas físicas...
}