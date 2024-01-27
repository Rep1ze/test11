function pifagor(){

    let a = prompt("Введите сторону А")
if(!a || isNaN(a) || a < 0){
    alert("Введи валид число ")
}else{
    let b = prompt("Введи сторону B")
    if(!b || isNaN(b) || b < 0){
        alert("Введи валид число")
    }else{
        let c = prompt("Введи третью сторону")
        if(!c || isNaN(c) || c < 0){
            alert("Введи валид число")
        }else if(a**2 == b**2 + c**2 || b**2 == a**2 + c**2 || c**2 == a**2 + b**2){
            alert("Пифагорова тройка")
        }else{
            alert("ну уж точно не тройка")
        }
    }
}
}
function thx(){
    alert("Thank`s for dowload")
}