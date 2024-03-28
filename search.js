
function verifiction(){
    const pathval= new URLSearchParams(window.location.search)
    let   pathload= pathval.get('search')
          FiltItens(pathload)
}


function FiltItens(Ent){
    for(let i=0; i<=localStorage.length; i++){
        let chitems= localStorage.key(i)
        let vlitems= localStorage.getItem(chitems)
        if(Ent=== vlitems){
            
        }
    }
}