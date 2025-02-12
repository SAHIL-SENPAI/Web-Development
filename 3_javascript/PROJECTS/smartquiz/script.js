const questionBank = [
    {
        question: "What is the main character's name in The Legend of Zelda series?",
        options: ["Zelda", "Link", "Ganon", "Sheik"],
        answer: "Link"
    },
    {
        question: "Which game series features the fictional setting of Rapture?",
        options: ["BioShock", "Fallout", "Half-Life", "Mass Effect"],
        answer: "BioShock"
    },
    {
        question: "What is the name of the first game in the Halo series?",
        options: ["Halo: Reach", "Halo: Combat Evolved", "Halo 3", "Halo Infinite"],
        answer: "Halo: Combat Evolved"
    },
    {
        question: "Which company developed the game Minecraft?",
        options: ["Mojang", "Valve", "Epic Games", "Nintendo"],
        answer: "Mojang"
    },
    {
        question: "What year was the PlayStation 5 released?",
        options: ["2018", "2019", "2020", "2021"],
        answer: "2020"
    },
    {
        question: "Which game popularized the Battle Royale genre?",
        options: ["PUBG", "Fortnite", "Apex Legends", "Call of Duty: Warzone"],
        answer: "PUBG"
    },
    {
        question: "In Among Us, what color is most associated with being 'sus'?",
        options: ["Red", "Blue", "Green", "Yellow"],
        answer: "Red"
    },
    {
        question: "Which game features characters such as Tracer, Genji, and Reinhardt?",
        options: ["Overwatch", "Valorant", "Team Fortress 2", "Paladins"],
        answer: "Overwatch"
    },
    {
        question: "What does 'MMORPG' stand for?",
        options: [
            "Massive Multiplayer Online Role-Playing Game",
            "Modern Multiplayer Online Role-Playing Game",
            "Mainstream Multiplayer Online Role-Playing Game",
            "Massive Modern Online Role-Playing Game"
        ],
        answer: "Massive Multiplayer Online Role-Playing Game"
    },
    {
        question: "In Grand Theft Auto V, how many main characters can you control?",
        options: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "Which game studio created The Witcher series?",
        options: ["CD Projekt Red", "Bethesda", "Ubisoft", "Square Enix"],
        answer: "CD Projekt Red"
    },
    {
        question: "What is the name of the main protagonist in the God of War series?",
        options: ["Kratos", "Zeus", "Ares", "Hercules"],
        answer: "Kratos"
    },
    {
        question: "Which game features the fictional city of Vice City?",
        options: [
            "Grand Theft Auto: Vice City",
            "Watch Dogs 2",
            "Saints Row",
            "Sleeping Dogs"
        ],
        answer: "Grand Theft Auto: Vice City"
    },
    {
        question: "Which Pokémon is #25 in the Pokédex?",
        options: ["Bulbasaur", "Pikachu", "Charmander", "Squirtle"],
        answer: "Pikachu"
    },
    {
        question: "What is the maximum level a Pokémon can reach?",
        options: ["50", "99", "100", "150"],
        answer: "100"
    },
    {
        question: "Which game features a mode called 'Zombies'?",
        options: [
            "Call of Duty",
            "Battlefield",
            "Gears of War",
            "Apex Legends"
        ],
        answer: "Call of Duty"
    },
    {
        question: "In which game do you play as a hunter fighting mechanical creatures?",
        options: ["Horizon Zero Dawn", "Far Cry Primal", "Monster Hunter", "ARK"],
        answer: "Horizon Zero Dawn"
    },
    {
        question: "What is the primary material collected in Minecraft?",
        options: ["Stone", "Iron", "Wood", "Dirt"],
        answer: "Wood"
    },
    {
        question: "Which is the fastest car in Mario Kart?",
        options: [
            "Blue Falcon",
            "B-Dasher",
            "Mach 8",
            "Gold Standard"
        ],
        answer: "Blue Falcon"
    },
    {
        question: "Which game features the slogan 'Prepare to Die'?",
        options: ["Dark Souls", "Bloodborne", "Demon's Souls", "Sekiro"],
        answer: "Dark Souls"
    },
    {
        question: "What does FPS stand for in gaming?",
        options: [
            "First-Person Shooter",
            "Frames Per Second",
            "Fast-Play Strategy",
            "Fighting Platform System"
        ],
        answer: "First-Person Shooter"
    },
    {
        question: "Which game is set in a post-apocalyptic Boston?",
        options: [
            "Fallout 4",
            "The Last of Us",
            "Metro Exodus",
            "Days Gone"
        ],
        answer: "Fallout 4"
    },
    {
        question: "Which series features the character Nathan Drake?",
        options: ["Uncharted", "Tomb Raider", "Assassin's Creed", "Far Cry"],
        answer: "Uncharted"
    },
    {
        question: "Which game introduced the character Solid Snake?",
        options: [
            "Metal Gear Solid",
            "Splinter Cell",
            "Hitman",
            "Resident Evil"
        ],
        answer: "Metal Gear Solid"
    },
    {
        question: "What is the name of the princess in the Mario series?",
        options: ["Peach", "Daisy", "Rosalina", "Pauline"],
        answer: "Peach"
    },
    {
        question: "What type of animal is Sonic?",
        options: ["Hedgehog", "Fox", "Bear", "Wolf"],
        answer: "Hedgehog"
    },
    {
        question: "What is the name of the main antagonist in Portal?",
        options: ["GLaDOS", "Wheatley", "Atlas", "P-Body"],
        answer: "GLaDOS"
    },
    {
        question: "Which game is known for the phrase 'The cake is a lie'?",
        options: ["Portal", "Half-Life", "BioShock", "Team Fortress 2"],
        answer: "Portal"
    },
    {
        question: "Which game series takes place in Tamriel?",
        options: [
            "The Elder Scrolls",
            "Dragon Age",
            "Divinity",
            "Fable"
        ],
        answer: "The Elder Scrolls"
    },
    {
        question: "Which of these games features the 'Plumbob' icon?",
        options: ["The Sims", "Animal Crossing", "Stardew Valley", "Harvest Moon"],
        answer: "The Sims"
    },
    
];

console.log(questionBank.length)



function randomquestion(){
    // FIRST METHOD
    // const data = new Set();
    // while(data.size != 5){
    //     const index = Math.floor(Math.random()*questionBank.length);
    //     data.add(questionBank[index]);
    // }

    // // const newdata = Array.from(data);
    // return [...data];


    // SECOND METHOD
    // questionBank.sort((a,b)=>Math.random()-0.5);
    // return questionBank.slice(0,5)

    // THIRD METHOD
    const arr = [];
    let length = questionBank.length;
    for(let i = 0 ; i < 5 ; i++){
        const index = Math.floor(Math.random()*length);
        arr.push(questionBank[index]);
        [questionBank[index],questionBank[length-1]] = [questionBank[length-1],questionBank[index]];
        length--;
    }
    return arr;



}

const form = document.querySelector("form");
const problem = randomquestion();

const answersheet ={ }


problem.forEach((obj,index)=>{

    const divcontainer = document.createElement("div");
    divcontainer.className = "question";
    
    
    const para = document.createElement("p");
    para.innerHTML = `${index+1}. ${obj["question"]}`;
    divcontainer.appendChild(para);

    answersheet[`q${index+1}`] = obj["answer"];

    // create 4 label for obtions

    obj["options"].forEach((data)=>{
       const label = document.createElement("label");
       const input = document.createElement("input");
       input.type = "radio";
       input.name = `q${index+1}`;
       input.value = data;
       label.appendChild(input);
       label.appendChild(document.createTextNode(data));
       divcontainer.appendChild(label);
       divcontainer.appendChild(document.createElement("br"));
    })

    form.appendChild(divcontainer);

})

const buttons = document.createElement("div");
buttons.className = "buttons";
const resetbutton = document.createElement("button");
resetbutton.type = "reset";
resetbutton.innerHTML = "Reset";
const submitbutton = document.createElement("button");
submitbutton.type = "submit";
submitbutton.innerHTML = "Submit";
buttons.appendChild(resetbutton);
buttons.appendChild(submitbutton);

form.appendChild(buttons)


console.log(answersheet)





form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data = new FormData(form);

    let result = 0;
    for(let [key,value] of data.entries()){
        if(value === answersheet[key]){
            result++;
        }
    }

    const output = document.createElement("div");
    output.id = "result";
    output.innerHTML = `you got ${result} out of 5 correct`
    form.appendChild(output);



})

form.addEventListener("reset",(event)=>{
    console.log("form formatted")
    const todelete = document.getElementById("result");
    todelete.remove();
})
