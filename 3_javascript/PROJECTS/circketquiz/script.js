const form = document.querySelector("form");
const answersheet = {
    q1:'sachin tendulkar',
    q2:'west indies',
    q3:'sachin tendulkar',
    q4:'264',
    q5:'muttiah mukitharan',
}
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data = new FormData(form);

    // const answer = Array.from(data.values());
    // let result = 0;
    // for(let i = 0 ; i<answersheet.length ; i++){
    //     if(answersheet[i] === answer[i]){
    //         result++;
    //     }
    // }

    let result = 0;
    for(let [key,value] of data.entries()){
        if(value === answersheet[key])
            result++;
    }
    const output = document.querySelector('#result')
    output.innerHTML = `${result}/5 are correct`
    
})

form.addEventListener('reset',(event)=>{
    console.log("form reseted")
    const output = document.getElementById("result");
    result.innerText = null;
})