const inputbox = document.getElementById("input-box");
const addbutton = document.getElementById("addbutton");
const listcontainer = document.getElementById("list-container")

addbutton.addEventListener("click",(event)=>{
    if(inputbox.value === ''){
        alert("you must write something !!!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
})

listcontainer.addEventListener("click",(event)=>{
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
});


function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}

function showData(){
    listcontainer.innerHTML =  localStorage.getItem("data")
}
showData();