
/*
document.getElementById('departamento').addEventListener('focus', function () {

    const inputDepartamento = document.getElementById('departamento');
    inputDepartamento.style.backgroundColor = '#81F653'

});

document.getElementById('departamento').addEventListener('blur', function () {
    const inputDepartamento = document.getElementById('departamento');
    inputDepartamento.style.backgroundColor = "white"

});
*/
///////////////////////////////////////////////////

function adicionarCorAoFocarInput() {
    const listInput = document.querySelectorAll("input[type = text]")

    listInput.forEach(function (item) {
        item.addEventListener('focus', function () {
            item.style.ou
            item.style.backgroundColor = "#db3c6e";
        });
        item.addEventListener('blur', function () {
            item.style.backgroundColor = "white";

        });
    });
}
///////////////////////////////////////////////////
function carregarCategorias() {
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML = "";

    console.log(categorias);

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectCategoria.add(optFirst);

    categorias.forEach(function (categoria) {
        const opt = document.createElement('option');
        opt.value = categoria.idCategoria;
        opt.text = categoria.Descricao;
        selectCategoria.add(opt)
    });
}
///////////////////////////////////////////////////
function carregarMotivos() {
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML = "";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectMotivo.add(optFirst);

    const valorCategoria = document.getElementById('categoriaMotivo').value;
    console.log("categoria slecionar:" + valorCategoria)
    const motivosFiltrados = motivos.filter((m) => m.idCategoria == valorCategoria)

    motivosFiltrados.forEach(function (motivo) {
        const opt = document.createElement('option');
        opt.value = motivo.idMotivo;
        opt.text = motivo.Descricao;
        selectMotivo.add(opt)
    });
}
///////////////////////////////////////////////////
document.getElementById("CodigoProduto").addEventListener("change", carregarProduto);


function carregarProduto() {


    let CodigoProduto = document.getElementById("CodigoProduto");


    let produtosFiltrados = produtos.filter((e) => {
        return e.idProduto == CodigoProduto.value
    }) 
   
    if (produtosFiltrados.length > 0) {
        document.getElementById('DescricaoProduto').value = produtosFiltrados[0].Descricao;
        document.getElementById('Estoque').value = produtosFiltrados[0].Estoque;

    }
    else {
        document.getElementById('DescricaoProduto').value = ''
    }
}
   
///////////////////////////////////////////////////
document.getElementById('idDepartamento').addEventListener("keyup", function () {
    const codigoPesquisado = document.getElementById('idDepartamento').value;
    let departamentosFiltrados = departamentos.filter((p) => p.idDep == codigoPesquisado);
    console.log(departamentosFiltrado);

    if (departamentosFiltrados.length > 0) {
        document.getElementById('departamento').value = departamentosFiltrados[0].Descricao;
    }
    else {
        document.getElementById('departamento').value = "";
    }
});
///////////////////////////////////////////////////
document.getElementById('idFuncionario').addEventListener("keyup", function () {
    const codigoPesquisado = document.getElementById('idFuncionario').value;
    let funcionariosFiltrados = funcionarios.filter((p) => p.idFuncionario == codigoPesquisado);


    if (funcionariosFiltrados.length > 0) {
        document.getElementById('NomeFuncionario').value = funcionariosFiltrados[0].Nome;
        document.getElementById('cargo').value = funcionariosFiltrados[0].Cargo;
    }
    else {
        document.getElementById('NomeFuncionarios').value = "";
    }
});
///////////////////////////////////////////////////
document.getElementById('btnGravar').addEventListener('click', function () {
    const elementosObrigatorios = document.querySelectorAll('[data-obrigatorio="true"]');
    console.log(elementosObrigatorios);

    elementosObrigatorios.forEach(function (item) {

        if (item.value == "" || item.value == -1) {
            item.style.backgroundColor = 'red';
        }
    })
    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;
    if (chkUrgenteValue == false && chkMedioValue == false && chkBaixoValue == false) {
        const divPrioridade = document.getElementById("radioPrioridade");
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
    }
});

function eventoClickPrioridadeHabilitarCor() {
    const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');
    console.log(checkboxesPrioridade);
    checkboxesPrioridade.forEach(function (checkbox) {
        checkbox.addEventListener('click', function () {
            const divPrioridade = document.getElementById("radioPrioridade");
            divPrioridade.classList.add('radioPrioridade');
            divPrioridade.classList.remove('radioPrioridadeDesabilitado');
            document.getElementById('urgente').classList.add('chkPrioridade');
            document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('medio').classList.add('chkPrioridade');
            document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('baixo').classList.add('chkPrioridade');
            document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
        });
    });
}

document.getElementById('categoriaMotivo').addEventListener('chage', function () {
    carregarMotivos();
});




function adicionarItem() {

    console.log("clicou em add")
    const tabelaItens = document.getElementById('tabela');
    const campoDescricaoProduto = document.getElementById('DescricaoProduto');
    const campoProduto = document.getElementById('CodigoProduto');
    const campoQuantidade = document.getElementById('Quantidade');
    const campoSaida = document.getElementById('Saida');

    
    const linha = document.createElement('tr');

    const tdCodigo = document.createElement('td');
    const tdDescricao = document.createElement('td');
    const tdQuantidadeSaida = document.createElement('td');
    const tdUnd = document.createElement('td');
    const tdPreco = document.createElement('td');
    const tdTotalLinha = document.createElement('td');
    const tdBtnRemover = document.createElement('td');
    tdBtnRemover.setAttribute("class", "btnExcluir")

    tdBtnRemover.addEventListener("click", function() {
        
        tabelaItens.removeChild(linha);

    })


    let campoSaidaId = campoSaida.value;



    const produtosPesquisado = produtos.filter((p) => p.idProduto == campoProduto.value);

    console.log( produtosPesquisado[0].idProduto)

    tdCodigo.textContent = produtosPesquisado[0].idProduto;
    tdDescricao.textContent = produtosPesquisado[0].Descricao;
    tdQuantidadeSaida.textContent = produtosPesquisado[0].Estoque;
    tdUnd.textContent = produtosPesquisado[0].Unidade;
    tdPreco.textContent = produtosPesquisado[0].Preco;
    tdTotalLinha.textContent =   campoSaidaId * produtosPesquisado[0].Preco;
    tdBtnRemover.textContent = "X"


    linha.appendChild(tdCodigo);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdQuantidadeSaida);
    linha.appendChild(tdUnd);
    linha.appendChild(tdPreco);
    linha.appendChild(tdTotalLinha);
    //tdTotalLinha vai ser ele com quem irie trabalhar.
    linha.appendChild(tdBtnRemover);




    tabelaItens.appendChild(linha);

}


function criarBtnRemover(tabela, objLinha, numeroLinha) {
    const btnRemoverItem = document.createElement('div')
    btnRemoverItem.className = "BtnRemover";
    btnRemoverItem.id = 'btnRemover' + numeroLinha;
    btnRemoverItem.innerHTML = '<span>Remover</span>';

    btnRemoverItem.addEventListener('click', function () {
        if (objLinha && tabelaItens.contains(objLinha)) {
            tabelaItens.removerChild(objLinha);
        }
        const totalRequisicao = document.getElementById('tatal');
        const colunas = objLinha.getElementById('td');
        let(valorLinha) = colunas[5].innerHTML;
        totalRequisicao.value = parseFloat(totalRequisicao.value - parseFloat(valorLinha));
    });
    return btnRemoverItem;
}


adicionarCorAoFocarInput();
carregarCategorias();
carregarMotivos();
