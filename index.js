function sellProduct(){
    const obj={
        Product1: 'Airpods pro 2',
        Product2: 'cherry-mouse',
        Product3: 'teclado ergonomico',
        Product4: 'Mousepad',
        Product5: 'mouse'
    }

    for(let i in obj){
        let ch= i.toString()
        let val= obj[i]
        localStorage.setItem(ch, val)
    }
}

function search(){
    let searchProduct= document.querySelector('.TextProdu').value
    let searchUrl= document.querySelector('.searchUrl')
    
        searchUrl.href= `http://127.0.0.1:5500/search.html?search=${searchProduct}`
}