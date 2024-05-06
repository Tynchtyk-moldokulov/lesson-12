let butik = document.querySelector('#butik')
let kitcen = document.querySelector('.kitcen-flex')
let a = 0
function openmenu(){
    if (kitcen.style.height == '550px'){
        kitcen.style.height = '265px'
    }else{
        kitcen.style.height = '550px'
    }
    a += 1
    if(a == 5){
        butik.removeEventListener('click',openmenu)
    }
}

butik.addEventListener('click',openmenu)
