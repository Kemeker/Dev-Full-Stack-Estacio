import cadastro.model.PessoaFisica;
import cadastro.model.PessoaFisicaDAO;
import cadastro.model.PessoaJuridica;
import cadastro.model.PessoaJuridicaDAO;

import java.util.List;
import java.util.Scanner;

public class CadastroBDTeste {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcao;
        
        do {
            System.out.println("Escolha uma opção:");
            System.out.println("1 - Incluir");
            System.out.println("2 - Alterar");
            System.out.println("3 - Excluir");
            System.out.println("4 - Exibir pelo ID");
            System.out.println("5 - Exibir todos");
            System.out.println("0 - Sair");
            opcao = scanner.nextInt();
            
            switch (opcao) {
                case 1:
                    incluirPessoa(scanner);
                    break;
                case 2:
                    alterarPessoa(scanner);
                    break;
                case 3:
                    excluirPessoa(scanner);
                    break;
                case 4:
                    exibirPorId(scanner);
                    break;
                case 5:
                    exibirTodos();
                    break;
                case 0:
                    System.out.println("Saindo do programa.");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }
        } while (opcao != 0);
    }
    
    private static void incluirPessoa(Scanner scanner) {
        System.out.println("Escolha o tipo (1 para Pessoa Física, 2 para Pessoa Jurídica):");
        int tipo = scanner.nextInt();
        
        if (tipo == 1) {
            PessoaFisica pessoaFisica = lerDadosPessoaFisica(scanner);
            PessoaFisicaDAO pessoaFisicaDAO = new PessoaFisicaDAO();
            pessoaFisicaDAO.incluir(pessoaFisica);
            System.out.println("Pessoa Física incluída com sucesso.");
        } else if (tipo == 2) {
            PessoaJuridica pessoaJuridica = lerDadosPessoaJuridica(scanner);
            PessoaJuridicaDAO pessoaJuridicaDAO = new PessoaJuridicaDAO();
            pessoaJuridicaDAO.incluir(pessoaJuridica);
            System.out.println("Pessoa Jurídica incluída com sucesso.");
        } else {
            System.out.println("Opção inválida.");
        }
    }
    
    private static PessoaFisica lerDadosPessoaFisica(Scanner scanner) {
        // Implemente a leitura dos dados de Pessoa Física aqui
    }
    
    private static PessoaJuridica lerDadosPessoaJuridica(Scanner scanner) {
        // Implemente a leitura dos dados de Pessoa Jurídica aqui
    }
    
    private static void alterarPessoa(Scanner scanner) {
        // Implemente a opção de alterar Pessoa Física ou Jurídica aqui
    }
    
    private static void excluirPessoa(Scanner scanner) {
        // Implemente a opção de excluir Pessoa Física ou Jurídica aqui
    }
    
    private static void exibirPorId(Scanner scanner) {
        // Implemente a opção de exibir por ID Pessoa Física ou Jurídica aqui
    }
    
    private static void exibirTodos() {
        // Implemente a opção de exibir todas as pessoas aqui
    }
}

    }
}
