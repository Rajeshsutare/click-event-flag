let cl =console.log;
const btn =document.getElementById("btn")
const box = document.getElementById('box')
let flag =true;

// let onclickhandler = ()=>{
// if(flag === true){
//     box.classList.add('d-none')
//     flag = false;
//     btn.innerHTML ='show box'
// }else{
//     box.classList.remove('d-none')
//     flag = true;
//     btn.innerHTML ='hide box'
// }
// }

function onclickhandler () {
    if (flag === true){
        box.classList.add('d-none')
        flag = false;
        btn.innerHTML = 'show box';
    }else{
        box.classList.remove('d-none')
        flag = true;
        btn.innerHTML = 'hide box'
    }
}

btn.addEventListener('click', onclickhandler)