
const greetings = ["Hi", "Hello", "Greetings", "Hey", "Yo", "Howdy", "Hola", "Bonjour", "Namaste", "Ciao", "Salam", "Konnichiwa", "Hallo", "Shalom", "Ola", "Aloha", "Ahoy", "Annyeong", "Zdravstvuyte", "Salut"];
const coolColors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#33FFF6", 
    "#F6FF33", "#8333FF", "#FF8333", "#33FF83", "#FF3333", 
    "#3333FF", "#33FFA6", "#FFB533", "#33B5FF", "#F633FF",
    "#6EFF33", "#FF6E33", "#336EFF", "#FF336E", "#33FFB5",
    "#FFE633", "#33FFE6", "#E633FF", "#57FF33", "#FF5733",
    "#5733FF", "#FF5733", "#FF3399", "#33FF99", "#FF9933", 
    "#9933FF", "#33AFFF", "#FFAF33", "#33FFA3", "#FFA3FF",
    "#33E6FF", "#E6FF33", "#FF33E6", "#A6FF33", "#33FFA6"
  ];
  

document.body.addEventListener("click" ,(event) => {
    const bubble = document.createElement('div');
    bubble.setAttribute("class","bubbles");
    bubble.textContent = greetings[Math.floor(Math.random()*greetings.length)];
    bubble.style.backgroundColor = coolColors[Math.floor(Math.random()*coolColors.length)]
    const x = event.clientX;
    const y = event.clientY;
    bubble.style.top = `${y-25}px`
    bubble.style.left = `${x-25}px`
    document.body.appendChild(bubble)

    setTimeout(()=>{
        bubble.remove();
    },5000)


})