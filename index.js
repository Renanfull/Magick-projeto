/*
o que precisamos fazer : - Quando o usuario clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço maximo selecionado.
  Objetivo 1 - criar a funcinalidade de filtrar as cartas
      
      passo 2 - escutar o clique no botão de aplicar filtros
      passo 3 - pegar os valores dos campos de categoria e preço
      passo 4 para cada carta, verificar se ela de ser mostrada ou escondida ,basado nos filtros que a pessoa digitou
*/



 //passo 1 - pegar o botão de aplicar filtros do html e  mandar pro js  
const botaoFiltrar=document.querySelector('.btn-filtrar');

//passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener('click',function(){
    console.log('clicou no botão');
    //passo 3 - pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector('#categoria').value;
    console.log(categoriaSelecionada);
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    console.log(precoMaximoSelecionado);


  //  passo 4 para cada carta, verificar se ela de ser mostrada ou escondida ,basado nos filtros que a pessoa digitou

 const cartas = document.querySelectorAll('.carta');
 
 cartas.forEach(function(carta){
    const categoriaCarta = carta.dataset.categoria;
    const precoCarta = carta.dataset.preco;

    let mostraCarta = true;

    console.log('a categoria selecionada foi :', categoriaSelecionada)

    const temFiltroDeCategoria = categoriaSelecionada != '' ;

    const cartaNaoBateComFiltroCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

    if(temFiltroDeCategoria &&cartaNaoBateComFiltroCategoria){

        mostraCarta = false;

    }
    const temFiltroDePreco = precoMaximoSelecionado !== '';
    const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado)

    if(temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo){
       mostraCarta = false;
    }

    if (mostraCarta){
        carta.classList.add('mostrar');
        carta.classList.remove('esconder')

} else {
    carta.classList.remove('mostrar');
    carta.classList.add('esconder');

}


 });

});










