const boxes = document.querySelector(".boxes");
let turn = 'O';
let total_turn = 0;



let winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

let demo_array = new Array(9).fill("E");
console.log(demo_array);

function checkwinner(){

    for(let [index0,index1,index2] of winner){
        if(demo_array[index0]!="E" && demo_array[index0]==demo_array[index1]&&demo_array[index1]===demo_array[index2]){
            return 1;
        }
    }

    return 0;
}

const game = (event)=>{
    const box = event.target;

    if(demo_array[box.id]==="E"){
        total_turn++;
    if(turn==="O"){

        box.innerHTML = 'O';
        demo_array[box.id] = "0";
        if(checkwinner()){
            document.getElementById("winningmessage").innerHTML = "Winner is O"
            boxes.removeEventListener("click",game);
            return;
            
        }
        turn = 'X';
    }
    else{
        box.innerHTML = 'X';
        demo_array[box.id] = "X";
        if(checkwinner()){
            document.getElementById("winningmessage").innerHTML = "Winner is X"
            boxes.removeEventListener("click",game);
            return;

        }
        turn = "O";
    }

    if(total_turn==9){
        document.getElementById("winningmessage").innerHTML = "Match DRAW"
    }
}
}



boxes.addEventListener("click",game);

const restart = document.querySelector("button");
restart.addEventListener("click",(event)=>{
    const box = document.getElementsByClassName("box");

    Array.from(box).forEach((value)=>{
        value.innerHTML = "";
    })

    turn = '0';
    total_turn = 0;
    demo_array = new Array(9).fill("E")

    boxes.addEventListener("click",game)


    document.getElementById("winningmessage").innerHTML = ""

})