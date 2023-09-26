SELECT p.nome AS produto, SUM(m.quantidade * m.valorUnitario) AS total_saidas
FROM movimento m
INNER JOIN produtos p ON m.idproduto = p.idProduto
WHERE m.tipo = 'S'
GROUP BY p.nome;
