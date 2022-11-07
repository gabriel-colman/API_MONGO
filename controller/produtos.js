let produtos = [
    {nome: 'Arroz', preco: 10.00},
    {nome: 'Feijão', preco: 5.70},
    {nome: 'Macarrão', preco: 2.50}
];

exports.listarProdutos = function(req, res){
    res.send(produtos);
}

exports.adicionarProduto = (req, res) => {
    const novoProduto = res.query;
    if(!novoProduto.nome || !novoProduto.preco){
        res.send({mensagem: '[ERRO]: Nome ou preço não informado'});
    } else {
        produtos.push(novoProduto);
        res.send({mensagem: '[SUCESSO]: Produto adicionado com sucesso'});
    }
}