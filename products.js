let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })
}

let categoria1 = "Escolar"
let categoria2 = "Eletrônico"


function listarProdutoPorCategoria(categoria) {
    for(let i = 1 ; i < 4; i++) {
        if(produtos[i].categoria == categoria){
            console.log(produtos[i])
        }
    }
}

listarProdutoPorCategoria (categoria1)
listarProdutoPorCategoria (categoria2)