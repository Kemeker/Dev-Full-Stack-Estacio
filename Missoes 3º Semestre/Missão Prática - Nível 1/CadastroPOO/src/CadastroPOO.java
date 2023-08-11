package cadastropoo; 

import com.mycompany.cadastropoo.model.PessoaFisica;
import com.mycompany.cadastropoo.model.PessoaFisicaRepo;
import com.mycompany.cadastropoo.model.PessoaJuridica;
import com.mycompany.cadastropoo.model.PessoaJuridicaRepo;

import java.util.Scanner;

public class CadastroPOO {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Repositórios
        PessoaFisicaRepo repoPessoaFisica = new PessoaFisicaRepo();
        PessoaJuridicaRepo repoPessoaJuridica = new PessoaJuridicaRepo();

        int opcao;
        do {

            System.out.println("========== CADASTRO DE PESSOAS ==========");
            System.out.println("Selecione uma opcao:");
            System.out.println("1 - Incluir");
            System.out.println("2 - Alterar");
            System.out.println("3 - Excluir");
            System.out.println("4 - Exibir pelo ID");
            System.out.println("5 - Exibir todos");
            System.out.println("6 - Salvar dados");
            System.out.println("7 - Recuperar dados");
            System.out.println("0 - Finalizar");
            System.out.print("Opcao: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); // Limpar o buffer do scanner

            switch (opcao) {
                case 1:
                    incluir(scanner, repoPessoaFisica, repoPessoaJuridica);
                    break;
                case 2:
                    alterar(scanner, repoPessoaFisica, repoPessoaJuridica);
                    break;
                case 3:
                    excluir(scanner, repoPessoaFisica, repoPessoaJuridica);
                    break;
                case 4:
                    exibirPorId(scanner, repoPessoaFisica, repoPessoaJuridica);
                    break;
                case 5:
                    exibirTodos(scanner, repoPessoaFisica, repoPessoaJuridica);
                    break;
                case 6:
                    salvarDados(scanner, repoPessoaFisica, repoPessoaJuridica);
                    break;
                case 7:
                    recuperarDados(scanner, repoPessoaFisica, repoPessoaJuridica);
                    break;
                case 0:
                    System.out.println("Finalizando o programa.");
                    break;
                default:
                    System.out.println("Opção inválida! Tente novamente.");
                    break;
            }
        } while (opcao != 0);

        scanner.close();
    }

    private static void incluir(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        System.out.println("Selecione o tipo de pessoa:");
        System.out.println("1 - Pessoa Fisica");
        System.out.println("2 - Pessoa Juridica");
        System.out.print("Opcao: ");
        int tipoPessoa = scanner.nextInt();
        scanner.nextLine(); // Limpar o buffer do scanner

        if (tipoPessoa == 1) {
            // Inclusão de Pessoa Física
            System.out.print("Digite o nome: ");
            String nome = scanner.nextLine();
            System.out.print("Digite o CPF: ");
            String cpf = scanner.nextLine();
            System.out.print("Digite a idade: ");
            int idade = scanner.nextInt();
            scanner.nextLine(); // Limpar o buffer do scanner

            PessoaFisica pessoaFisica = new PessoaFisica(0, nome, cpf, idade); // Usando o construtor correto
            repoPessoaFisica.inserir(pessoaFisica);
            System.out.println("Pessoa Física adicionada com sucesso!");
        } else if (tipoPessoa == 2) {
            // Inclusão de Pessoa Jurídica
            System.out.print("Digite o nome: ");
            String nome = scanner.nextLine();
            System.out.print("Digite o CNPJ: ");
            String cnpj = scanner.nextLine();

            PessoaJuridica pessoaJuridica = new PessoaJuridica(0, nome, cnpj); // Usando o construtor correto
            repoPessoaJuridica.inserir(pessoaJuridica);
            System.out.println("Pessoa Jurídica adicionada com sucesso!");
        } else {
            System.out.println("Opção inválida!");
        }
    }

    private static void alterar(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
    System.out.println("Digite o ID da pessoa que deseja alterar:");
    int id = scanner.nextInt();
    scanner.nextLine(); // Limpar o buffer do scanner

    System.out.println("Selecione o tipo de pessoa:");
    System.out.println("1 - Pessoa Fisica");
    System.out.println("2 - Pessoa Juridica");
    System.out.print("Opcao: ");
    int tipoPessoa = scanner.nextInt();
    scanner.nextLine(); // Limpar o buffer do scanner

    if (tipoPessoa == 1) {
        // Alteração de Pessoa Física
        PessoaFisica pessoaFisica = repoPessoaFisica.buscarPorId(id);
        if (pessoaFisica != null) {
            System.out.print("Digite o novo nome: ");
            String novoNome = scanner.nextLine();
            System.out.print("Digite o novo CPF: ");
            String novoCpf = scanner.nextLine();
            System.out.print("Digite a nova idade: ");
            int novaIdade = scanner.nextInt();
            scanner.nextLine(); // Limpar o buffer do scanner

            pessoaFisica.setNome(novoNome);
            pessoaFisica.setCpf(novoCpf);
            pessoaFisica.setIdade(novaIdade);

            repoPessoaFisica.atualizar(pessoaFisica);
            System.out.println("Pessoa Física alterada com sucesso!");
        } else {
            System.out.println("Pessoa não encontrada com o ID especificado.");
        }
    } else if (tipoPessoa == 2) {
        // Alteração de Pessoa Jurídica
        PessoaJuridica pessoaJuridica = repoPessoaJuridica.buscarPorId(id);
        if (pessoaJuridica != null) {
            System.out.print("Digite o novo nome: ");
            String novoNome = scanner.nextLine();
            System.out.print("Digite o novo CNPJ: ");
            String novoCnpj = scanner.nextLine();

            pessoaJuridica.setNome(novoNome);
            pessoaJuridica.setCnpj(novoCnpj);

            repoPessoaJuridica.atualizar(pessoaJuridica);
            System.out.println("Pessoa Jurídica alterada com sucesso!");
        } else {
            System.out.println("Pessoa não encontrada com o ID especificado.");
        }
    } else {
        System.out.println("Opção inválida!");
    }
}


    private static void excluir(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
    System.out.println("Digite o ID da pessoa que deseja excluir:");
    int id = scanner.nextInt();
    scanner.nextLine(); // Limpar o buffer do scanner

    System.out.println("Selecione o tipo de pessoa:");
    System.out.println("1 - Pessoa Fisica");
    System.out.println("2 - Pessoa Juridica");
    System.out.print("Opcao: ");
    int tipoPessoa = scanner.nextInt();
    scanner.nextLine(); // Limpar o buffer do scanner

    if (tipoPessoa == 1) {
        // Exclusão de Pessoa Física
        PessoaFisica pessoaFisica = repoPessoaFisica.buscarPorId(id);
        if (pessoaFisica != null) {
            repoPessoaFisica.excluir(pessoaFisica);
            System.out.println("Pessoa Física excluída com sucesso!");
        } else {
            System.out.println("Pessoa não encontrada com o ID especificado.");
        }
    } else if (tipoPessoa == 2) {
        // Exclusão de Pessoa Jurídica
        PessoaJuridica pessoaJuridica = repoPessoaJuridica.buscarPorId(id);
        if (pessoaJuridica != null) {
            repoPessoaJuridica.excluir(pessoaJuridica);
            System.out.println("Pessoa Jurídica excluída com sucesso!");
        } else {
            System.out.println("Pessoa não encontrada com o ID especificado.");
        }
    } else {
        System.out.println("Opção inválida!");
    }
}


    private static void exibirPorId(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
    System.out.println("Digite o ID da pessoa que deseja exibir:");
    int id = scanner.nextInt();
    scanner.nextLine(); // Limpar o buffer do scanner

    System.out.println("Selecione o tipo de pessoa:");
    System.out.println("1 - Pessoa Fisica");
    System.out.println("2 - Pessoa Juridica");
    System.out.print("Opcao: ");
    int tipoPessoa = scanner.nextInt();
    scanner.nextLine(); // Limpar o buffer do scanner

    if (tipoPessoa == 1) {
        // Exibição de Pessoa Física
        PessoaFisica pessoaFisica = repoPessoaFisica.buscarPorId(id);
        if (pessoaFisica != null) {
            pessoaFisica.exibir();
        } else {
            System.out.println("Pessoa não encontrada com o ID especificado.");
        }
    } else if (tipoPessoa == 2) {
        // Exibição de Pessoa Jurídica
        PessoaJuridica pessoaJuridica = repoPessoaJuridica.buscarPorId(id);
        if (pessoaJuridica != null) {
            pessoaJuridica.exibir();
        } else {
            System.out.println("Pessoa não encontrada com o ID especificado.");
        }
    } else {
        System.out.println("Opção inválida!");
    }
}

    private static void exibirTodos(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
    System.out.println("Selecione o tipo de pessoa:");
    System.out.println("1 - Pessoa Fisica");
    System.out.println("2 - Pessoa Juridica");
    System.out.print("Opcao: ");
    int tipoPessoa = scanner.nextInt();
    scanner.nextLine(); // Limpar o buffer do scanner

    if (tipoPessoa == 1) {
        // Exibição de todas as Pessoas Físicas
        System.out.println("Pessoas Físicas cadastradas:");
        for (PessoaFisica pessoaFisica : repoPessoaFisica.getListaPessoas()) {
            pessoaFisica.exibir();
            System.out.println("----------------------");
        }
    } else if (tipoPessoa == 2) {
        // Exibição de todas as Pessoas Jurídicas
        System.out.println("Pessoas Jurídicas cadastradas:");
        for (PessoaJuridica pessoaJuridica : repoPessoaJuridica.getListaPessoas()) {
            pessoaJuridica.exibir();
            System.out.println("----------------------");
        }
    } else {
        System.out.println("Opção inválida!");
    }
}


    private static void salvarDados(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
    System.out.println("Selecione o tipo de pessoa:");
    System.out.println("1 - Pessoa Fisica");
    System.out.println("2 - Pessoa Juridica");
    System.out.print("Opcao: ");
    int tipoPessoa = scanner.nextInt();
    scanner.nextLine(); // Limpar o buffer do scanner

    if (tipoPessoa == 1) {
        // Salvar dados das Pessoas Físicas em um arquivo
        if (repoPessoaFisica.salvarDados()) {
            System.out.println("Dados das Pessoas Físicas salvos com sucesso!");
        } else {
            System.out.println("Erro ao salvar os dados das Pessoas Físicas.");
        }
    } else if (tipoPessoa == 2) {
        // Salvar dados das Pessoas Jurídicas em um arquivo
        if (repoPessoaJuridica.salvarDados()) {
            System.out.println("Dados das Pessoas Jurídicas salvos com sucesso!");
        } else {
            System.out.println("Erro ao salvar os dados das Pessoas Jurídicas.");
        }
    } else {
        System.out.println("Opção inválida!");
    }
}


    private static void recuperarDados(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
    System.out.println("Selecione o tipo de pessoa:");
    System.out.println("1 - Pessoa Fisica");
    System.out.println("2 - Pessoa Juridica");
    System.out.print("Opcao: ");
    int tipoPessoa = scanner.nextInt();
    scanner.nextLine(); // Limpar o buffer do scanner

    if (tipoPessoa == 1) {
        // Recuperar dados das Pessoas Físicas de um arquivo
        if (repoPessoaFisica.recuperarDados()) {
            System.out.println("Dados das Pessoas Físicas recuperados com sucesso!");
        } else {
            System.out.println("Erro ao recuperar os dados das Pessoas Físicas.");
        }
    } else if (tipoPessoa == 2) {
        // Recuperar dados das Pessoas Jurídicas de um arquivo
        if (repoPessoaJuridica.recuperarDados()) {
            System.out.println("Dados das Pessoas Jurídicas recuperados com sucesso!");
        } else {
            System.out.println("Erro ao recuperar os dados das Pessoas Jurídicas.");
        }
    } else {
        System.out.println("Opção inválida!");
    }
}

