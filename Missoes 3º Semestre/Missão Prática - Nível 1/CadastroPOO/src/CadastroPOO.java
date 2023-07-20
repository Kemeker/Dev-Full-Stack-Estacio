package cadastropoo; // Verifique se o pacote está correto, ou ajuste-o conforme o seu projeto.

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
        // Implemente a lógica para alteração de pessoas físicas e jurídicas
    }

    private static void excluir(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        // Implemente a lógica para exclusão de pessoas físicas e jurídicas
    }

    private static void exibirPorId(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        // Implemente a lógica para exibir os dados de uma pessoa física ou jurídica pelo ID
    }

    private static void exibirTodos(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        // Implemente a lógica para exibir todos os dados de pessoas físicas ou jurídicas
    }

    private static void salvarDados(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        // Implemente a lógica para salvar os dados em arquivos
    }

    private static void recuperarDados(Scanner scanner, PessoaFisicaRepo repoPessoaFisica, PessoaJuridicaRepo repoPessoaJuridica) {
        // Implemente a lógica para recuperar os dados de arquivos
    }
}
