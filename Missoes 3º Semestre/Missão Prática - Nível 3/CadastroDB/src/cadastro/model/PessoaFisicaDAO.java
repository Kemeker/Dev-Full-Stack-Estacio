package cadastro.model;

import cadastro.model.util.ConectorBD;
import cadastro.model.util.SequenceManager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class PessoaFisicaDAO {
    public PessoaFisica getPessoa(int id) {
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            conn = ConectorBD.getConnection();
            String sql = "SELECT * FROM PessoaFisica WHERE id = ?";
            stmt = conn.prepareStatement(sql);
            stmt.setInt(1, id);
            rs = stmt.executeQuery();

            if (rs.next()) {
                int pessoaId = rs.getInt("id");
                String nome = rs.getString("nome");
                String logradouro = rs.getString("logradouro");
                String cidade = rs.getString("cidade");
                String estado = rs.getString("estado");
                String telefone = rs.getString("telefone");
                String email = rs.getString("email");
                String cpf = rs.getString("cpf");

                return new PessoaFisica(pessoaId, nome, logradouro, cidade, estado, telefone, email, cpf);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConectorBD.close(rs);
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }

        return null;
    }

    public List<PessoaFisica> getPessoas() {
        List<PessoaFisica> pessoas = new ArrayList<>();
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            conn = ConectorBD.getConnection();
            String sql = "SELECT * FROM PessoaFisica";
            stmt = conn.prepareStatement(sql);
            rs = stmt.executeQuery();

            while (rs.next()) {
                int pessoaId = rs.getInt("id");
                String nome = rs.getString("nome");
                String logradouro = rs.getString("logradouro");
                String cidade = rs.getString("cidade");
                String estado = rs.getString("estado");
                String telefone = rs.getString("telefone");
                String email = rs.getString("email");
                String cpf = rs.getString("cpf");

                PessoaFisica pessoa = new PessoaFisica(pessoaId, nome, logradouro, cidade, estado, telefone, email, cpf);
                pessoas.add(pessoa);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConectorBD.close(rs);
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }

        return pessoas;
    }

    public boolean incluir(PessoaFisica pessoa) {
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = ConectorBD.getConnection();
            String sqlPessoa = "INSERT INTO Pessoa (nome, logradouro, cidade, estado, telefone, email) VALUES (?, ?, ?, ?, ?, ?)";
            stmt = conn.prepareStatement(sqlPessoa);
            stmt.setString(1, pessoa.getNome());
            stmt.setString(2, pessoa.getLogradouro());
            stmt.setString(3, pessoa.getCidade());
            stmt.setString(4, pessoa.getEstado());
            stmt.setString(5, pessoa.getTelefone());
            stmt.setString(6, pessoa.getEmail);

            if (stmt.executeUpdate() == 1) {
                int novoId = SequenceManager.getValue("SequenciaPessoa");
                String sqlPessoaFisica = "INSERT INTO PessoaFisica (id, cpf) VALUES (?, ?)";
                stmt = conn.prepareStatement(sqlPessoaFisica);
                stmt.setInt(1, novoId);
                stmt.setString(2, pessoa.getCpf());

                return stmt.executeUpdate() == 1;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }

        return false;
    }

    public boolean alterar(PessoaFisica pessoa) {
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = ConectorBD.getConnection();
            String sqlPessoa = "UPDATE Pessoa SET nome = ?, logradouro = ?, cidade = ?, estado = ?, telefone = ?, email = ? WHERE id = ?";
            stmt = conn.prepareStatement(sqlPessoa);
            stmt.setString(1, pessoa.getNome());
            stmt.setString(2, pessoa.getLogradouro());
            stmt.setString(3, pessoa.getCidade());
            stmt.setString(4, pessoa.getEstado());
            stmt.setString(5, pessoa.getTelefone());
            stmt.setString(6, pessoa.getEmail());
            stmt.setInt(7, pessoa.getId());

            if (stmt.executeUpdate() == 1) {
                String sqlPessoaFisica = "UPDATE PessoaFisica SET cpf = ? WHERE id = ?";
                stmt = conn.prepareStatement(sqlPessoaFisica);
                stmt.setString(1, pessoa.getCpf());
                stmt.setInt(2, pessoa.getId());

                return stmt.executeUpdate() == 1;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }

        return false;
    }

    public boolean excluir(int id) {
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = ConectorBD.getConnection();
            String sqlPessoaFisica = "DELETE FROM PessoaFisica WHERE id = ?";
            stmt = conn.prepareStatement(sqlPessoaFisica);
            stmt.setInt(1, id);
            int result = stmt.executeUpdate();

            if (result > 0) {
                String sqlPessoa = "DELETE FROM Pessoa WHERE id = ?";
                stmt = conn.prepareStatement(sqlPessoa);
                stmt.setInt(1, id);
                return stmt.executeUpdate() > 0;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            ConectorBD.close(stmt);
            ConectorBD.close(conn);
        }

        return false;
    }
}
