const crono = document.getElementById("crono");
const btn = document.getElementById("btn")
const interval = setInterval(() => {
        i++
        console.log(i);
    }, 1000);

let act = false

function turn(){
    if(act === false){act = true;console.log(act)
    }else{
            act=false;console.log(act)
        }
}

let i = 0

btn.addEventListener("click",function(){
    if(act==true){
        interval
    }else{clearInterval(interval)}
})
