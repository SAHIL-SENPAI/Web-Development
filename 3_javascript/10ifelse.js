let arr = [12,14,16,18,22,33,44,55,66,77,88,99,11,44,1]

function canpass(arr){
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] > 18){
            console.log("pass")
        }
        else{
            console.log("fail")
        }   
    }
}

canpass(arr)

// switch 
switch(new Date().getDay()){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log('wednsday')
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday")
        break;
}

// for loop
for(let i = 0 ; i<10 ; i++){
    console.log("hello world");
}

// nested loop,print this pattern
// 12345
// 12345
// 12345
// 12345
// 12345
// 12345


for(let i = 0 ; i<6 ; i++){
    for(let i = 1 ; i<=5 ;i++){
        console.log(i);
    } 
}

// while loop
let i = 1;
while(i<6){
    console.log("mwww")
    i++;
}


// PRINTING OBJECT USINNG LOOPS

let obj = {
    name:"sahil",
    money:430,
    balance:30,
    age:20,
}

let key = Object.keys(obj);
for(let i = 0 ; i<key.length ; i++){
    console.log(key[i],obj[key[i]])
}
