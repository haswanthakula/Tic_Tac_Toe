function myfun(cell){
    cell.innerHTML = "x";    
}

function ResetAll(){
    let r = document.getElementsByClassName('cell')
    for(let i=0; i<=8; i++){
        r[i].innerHTML=""
    } 
}
