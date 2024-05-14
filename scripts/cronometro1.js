const crono = document.getElementById("crono");
const btn = document.getElementById("btn");

let interval
let act = false
let i = 0

function turn(){
    if(act === false){act = true;console.log(act)
    }else{
            act=false;console.log(act)
        }
}

btn.addEventListener("click",function(){
        if(act===true){
        interval = setInterval(() => {
        i++
        console.log(i);
        crono.innerHTML = i
    }, 1000);
        }else{clearInterval(interval)}
    }
)
document.addEventListener('DOMContentLoaded',function(){
    crono.innerHTML = i
})

