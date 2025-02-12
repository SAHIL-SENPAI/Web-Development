document.addEventListener('mousemove', (event) => {
    const x = document.getElementById("x");
    const y = document.getElementById("y");
    x.innerHTML =`X - ${event.clientX}` ;
    y.innerHTML =`y - ${event.clientY}` ;

    
    
    
});



function makebubbles(){

    const bubble = document.createElement("div");
    bubble.setAttribute("class","bubbles")
    const randomx = Math.floor(Math.random()*1527);
    const randomy = Math.floor(Math.random()*703);
    bubble.style.top = `${randomy-25}px`;
    bubble.style.left = `${randomx-25}px`;
    document.body.appendChild(bubble);

    setTimeout(()=>{
        bubble.remove();
    },2000)

}

let score = 0 ;
const output = document.getElementById("score");

document.body.addEventListener("click",(event)=>{
    if(event.target.className == "bubbles"){
        score++;
        event.target.remove();
        output.innerHTML = `score: ${score}`;
    }
    
})


setInterval(makebubbles,2000)


