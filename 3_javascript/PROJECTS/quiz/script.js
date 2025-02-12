const form = document.querySelector('form');

// form.addEventListener('click', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('input', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('change', (event)=>{
//     console.log(event.target.value);
// })


// focus is for single element it wont bubble , therefore we use focusin
// form.addEventListener('focus', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusin', (event)=>{
//     console.log(event.target.value);
// })

 
// used for single element , it wont bubble therefore we use focusout for bubbling events
// form.addEventListener('blur', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout', (event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     const name = document.querySelector("#first")
//     console.log(name.value)
//     const lastname = document.querySelector("#second");
//     console.log(lastname.value)
//     const age = document.querySelector("#third")
//     console.log(age.value)


//     const result = document.getElementById("result");
//     result.innerText = `${name.value} ${lastname.value} is a good boy`
//     result.style.display = "flex";
//     result.style.justifyContent = "center"

// })


form.addEventListener("submit",(event)=>{
    const data = new FormData(form);
   
    for(let [key,value] of data.entries()){
        console.log(key, value)
    }
})


form.addEventListener('reset',(event)=>{
    console.log("form reseted")
    const result = document.getElementById("result");
    result.innerText = null;
})

