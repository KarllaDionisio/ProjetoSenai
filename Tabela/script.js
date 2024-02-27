
var totalTotal = 0

function adicionarItem(){
    //obter valores dos campos digitados
        var nome = document.getElementById("nome").value;
        // var valor = document.getElementById("valor").value;
        var quantidade = document.getElementById("quantidade").value;
        nome = nome.toLowerCase();
        var valor = precoMarca(nome);
        var total = valor * quantidade;
        total = total.toFixed(2)
        totalTotal+= total
        //console.log(totalTotal,valor)

        //validar se todas existem
        if( valor == 0){
            alert("PRODUTO INVÁLIDO!")
            return
        }
        
        if(!nome || !valor || !quantidade || !total ){
            alert("preencha os campos!!!");
            return
        }

        //criar a tabela, mas precisamente uma linha na tabela
        var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
        var novaLinha = tabela.insertRow(tabela.rows.length);
        var celulaNome = novaLinha.insertCell(0);
        var celulaValor = novaLinha.insertCell(1);
        var celulaQuantidade = novaLinha.insertCell(2);
        var celulaTotal = novaLinha.insertCell(3);
        var celulaTotalTotal = novaLinha.insertCell(4);

        //colocar valores nas celulas
        celulaNome.innerHTML = nome;
        celulaValor.innerHTML = valor;
        celulaQuantidade.innerHTML = quantidade;
        celulaTotal.innerHTML = total;

        //limpar os campos depois e construir a linha da tabela
         document.getElementById("nome").value = "";
         document.getElementById("quantidade").value = "";
    }


function precoMarca(nome){
switch (nome){
    case "arroz":
        valor = 5.79
        break
    case "feijao":
        valor = 6.99
        break 
    case "oleo de soja":
        valor = 6.49
        break 
    case "sal":
        valor = 2.79
        break 
    case "acucar":
        valor = 4.49
        break
    case "cafe": 
        valor = 12.98
        break
    case "macarrao":
        valor = 3.49
        break
    case "trigo": 
        valor = 4.49
        break
    case "biscoito":
        valor = 6.99
        break
    case "farinha de milho":
        valor = 7.99
        break
    case "leite em po":
        valor = 8
        break
    case "achocolatado":
        valor =9.98
        break
    case "pao":
        valor = 5.99
        break
    case "queijo mussarela":
        valor = 49
        break
    case "presunto":
        valor = 12
        break
    case "requeijao":
        valor = 9.29
        break
    case "iogurte": 
        valor = 2.99
        break
    case "margarina":
        valor =11.29
        break
    case "pao de queijo":
        valor = 9.89
        break
    case "sorvete":
        valor = 30
        break
    case "hamburguer":
        valor = 18.99
        break
    case "lasanha":
        valor = 15.98
        break
    case "salame":
        valor = 25
        break
    case "pate":
        valor = 2,79
        break
    case "pizza":
        valor = 19.99
        break
    case "picles":
        valor = 10.90
        break
    case "cerveja":
        valor = 11.99
        break
    case "vinho": 
        valor =170
        break 
    case "whisky":
        valor = 140.98
        break
    case "licor":
        valor = 120 
        break
    case "energético":
        valor = 20
        break
    case "gin":
        valor = 199.99
        break
    case "refrigerante":
        valor = 12
        break
    case "suco de uva":
        valor = 15
        break
    case "cha mate":
        valor = 14
        break
    case "leite":
        valor = 4.99
        break
    case "vodka":
        valor = 1111.98
        break
    case "cachaca":
        valor = 3.99
        break
    case "sabao liquido":
        valor = 50.96
        break
    case "sabao em pó":
        valor = 19.36
        break
    case "amaciante":
        valor = 28.41
        break
    case "detergente":
        valor = 15.12
        break
    case "multiuso":
        valor = 6.81
        break
    case "desinfetante":
        valor = 9.99
        break
    case "agua sanitaria":
        valor = 16.99
        break
    case "alcool":
        valor = 9.99
        break
    case "pedra sanitaria":
        valor = 2.49
        break
    case "limpa moveis":
        valor = 16.99
        break
    case "querosene":
        valor = 19.99
        break
    case "naftalina":
        valor = 2.5
        break
    case "desodorizador":
        valor = 10.89
        break
    default:
        valor = 0
    }
    
    return valor

}




    function exportarParaExcel(){

    var tabela = document.getElementById("tabela");
    var nomeArquivo = "tabela_produtos.xlsx"
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de produtos"});
    XLSX.writeFile(wb, nomeArquivo);
    }