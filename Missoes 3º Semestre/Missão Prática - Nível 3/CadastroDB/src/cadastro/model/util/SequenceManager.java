package cadastro.model.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SequenceManager {
    public static int getValue(String sequenceName) throws SQLException {
        Connection conn = ConectorBD.getConnection();
        String sql = "SELECT NEXT VALUE FOR " + sequenceName + " AS nextValue";
        PreparedStatement stmt = conn.prepareStatement(sql);
        ResultSet rs = stmt.executeQuery();
        if (rs.next()) {
            return rs.getInt("nextValue");
        }
        return 0; 
    }
}
