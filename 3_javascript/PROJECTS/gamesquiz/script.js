const answersheet ={
    q1:"Mario",
    q2:"Fortnite",
    q3:"Hedgehog",
    q4:"Pokémon Go",
    q5:"Sony",
}
const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data = new FormData(form);

    let result = 0;
    for(let [key,value] of data.entries()){
        if(value === answersheet[key]){
            result++;
        }
    }

    const output = document.getElementsByClassName("result")[0];
    output.innerHTML = `you got ${result} out of 5 correct`


})

form.addEventListener("reset",(event)=>{
    console.log("form formatted")
    alert("form formatted")
})