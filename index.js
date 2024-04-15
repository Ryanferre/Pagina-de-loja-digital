function Movment(){
    let BoxSearch= document.querySelector('.Pesquisa')
    let BoxAconlt= document.querySelector('.Login')
    let BoxUnit= document.querySelector('.Box-Unit')
    if(BoxUnit.style.top!= '80%'){
        BoxUnit.style.top= '80%'
        BoxSearch.style.marginLeft= '0%';
        BoxAconlt.style.marginLeft= '0%'
    }else{
        BoxUnit.style.top= ''
        BoxAconlt.style.marginLeft= ''
        BoxSearch.style.marginLeft= ''
    }
}

function sellProduct(){
    const obj= [
        [
            {
                id: 1,
                mark: 'Apple',
                producte: 'Airpods pro 2',
                description: 'wireless headphones',
                txt: 'price',
                price: '$519.99',
                imag: 'imagens/Airpods pro 2.webp'
            }
        ],
       [
        {
            id: 2,
            mark: 'Cherry',
            producte: 'cherry-mouse',
            description: 'Mouse ergonomico wireless',
            txt: 'price',
            price: '$99.00',
            imag: 'imagens/cherry-mouse.png'
        }
       ],
        [
            {
                id: 3,
                mark: 'hp',
                producte: 'teclado ergonomico',
                description: 'Teclado ergonomico wireless',
                txt: 'price',
                price: '$150.00',
                imag: 'imagens/Teclado ergonomico.png'
            }
        ],
        [
            {
                id: 4,
                mark: 'Plate',
                producte: 'Mousepad',
                description: 'Mousepad construido sobre',
                txt: 'price',
                price: '$209.00',
                imag: 'imagens/aluminum-pad(1).png'
            }
        ]
    ]

    let Cotainer= localStorage.setItem('stoque', JSON.stringify(obj))
}

function search(){
    let searchProduct= document.querySelector('.TextProdu').value
    let searchUrl= document.querySelector('.searchUrl')
    
        searchUrl.href= `http://127.0.0.1:5500/search.html?search=${searchProduct}`
}