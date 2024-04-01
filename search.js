
function verifiction(){
    const pathval= new URLSearchParams(window.location.search)
    let   pathload= pathval.get('search')
    for(let i=0; i<=pathload.length; i++){
        if(pathload[i]===' '){
            FiltItens(pathload.split(' '))
        }
    }
}


function FiltItens(Ent){
    let acesArmaz= localStorage.getItem('stoque')
    let Prime= Ent[0]
    let Conver= JSON.parse(acesArmaz)
    let Fon= ['Fone', 'fone', 'airpods']
    let Tec= ['teclado', 'Teclado']
    let Mous= ['mouse', 'Mouse']
    for(let i=0; i<=Fon.length && i<=Tec.length && i<=Mous.length; i++){
        switch (Prime) {
            case Fon[i]:
                
                break;
        
            default:
                break;
        }

    }
}