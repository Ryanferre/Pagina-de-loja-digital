function sellProduct(){
    const obj= [
        {
            product1: 'Airpods pro 2'
        },
        {
            product1: 'Mouse ergonomico wireless'
        },
        {
            product1: 'Teclado ergonomico wireless'
        },
        {
            product1: 'Mousepad'
        }
    ]

    let Cotainer= localStorage.setItem('stoque', JSON.stringify(obj))
}

function search(){
    let searchProduct= document.querySelector('.TextProdu').value
    let searchUrl= document.querySelector('.searchUrl')
    
        searchUrl.href= `http://127.0.0.1:5500/search.html?search=${searchProduct}`
}