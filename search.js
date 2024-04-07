
function verifiction(){
    //acessando o objeto da url
    const pathval= new URLSearchParams(window.location.search)
    //fazendo o resgate da variavel contida na url
    let   pathload= pathval.get('search')
    //passando o  valor para FiltItens
    FiltItens(pathload)
}


function FiltItens(Ent){
    
    let Fon= ['Fone', 'fone', 'airpods']
    let Tec= ['teclado', 'Teclado']
    let Mous= ['mouse', 'Mouse']
    let list = ''

    //RESGATANDO O OBJETO DO  LOCALSTORANGE
    let acesArmaz= localStorage.getItem('stoque')

    //TRANSFORMANDO JSON EM UM OBJETO
    let Conver= JSON.parse(acesArmaz)

    let Itens= document.querySelector('.list')
    //lendo as palavras chaves
    if(Fon.includes(Ent)){
        Conver[0].forEach(element => {
            list+=`
            <li class="items">
                <div class="UnitDescription">
                    <p>${element.mark}</p>
                    <img class="ProductImag" src="${element.imag}">
                    <h3>${element.producte}</h3>
                    <p>${element.description}</p>
                </div>
                <div class="UnitPrice">
                    <p>${element.txt}</p>
                    <h4>${element.price}</h4>
                </li>
            `
            Itens.innerHTML= list
        });
    
    }else if(Tec.includes(Ent)){
        Conver[1].forEach(element => {
            list+=`
            <li class="items">
                <div class="UnitDescription">
                    <p>${element.mark}</p>
                    <img class="ProductImag" src="${element.imag}">
                    <h3>${element.producte}</h3>
                    <p>${element.description}</p>
                </div>
                <div class="UnitPrice">
                    <p>${element.txt}</p>
                    <h4>${element.price}</h4>
                </li>
            `
            Itens.innerHTML= list
        });
    
    }else if(Mous.includes(Ent)){
        Conver[2].forEach(element => {
            list+=`
            <li class="items">
                <div class="UnitDescription">
                    <p>${element.mark}</p>
                    <img class="ProductImag" src="${element.imag}">
                    <h3>${element.producte}</h3>
                    <p>${element.description}</p>
                </div>
                <div class="UnitPrice">
                    <p>${element.txt}</p>
                    <h4>${element.price}</h4>
                </li>
            `
            Itens.innerHTML= list
        });
    
    }
}