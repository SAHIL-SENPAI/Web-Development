//OBJECTS
// we can give extra space with string method then it can only be accessed by obj["pass word"]
let obj = {
    username : "sahil",
    "pass word" : "123453223",
    null : "hello",
    0 : 6
}
console.log(obj.username)
console.log(obj["pass word"])
console.log(obj.null,obj["null"])
console.log(obj[0],obj["0"])



// 2nd method for object decleration
const person = new Object();
person.name = "moon";
person.password = "11f2121";
person.random = "balalbalablabla";

delete person.random;
console.log(person)

person.name = "misa"

// 3rd method we use when we have to use same format again and again
class player{
    constructor(name,level,job,gender){
        this.name = name;
        this.level = level;
        this.job = job;
        this.gender = gender;
    }
}

let player1 = new player("MOON",100,"archer","female")
let player2 = new player("SAHIL",65,"damage dealer","male")
let player3 = new player("NITIN",50,"healer","male")
console.log(player1,player2,player3)


// important operation on object
const arrplayer1 = Object.keys(player1);
console.log(arrplayer1)

const arrplayer2 = Object.values(player2);
console.log(arrplayer2)

const arrplayer3 = Object.entries(player3)
console.log(arrplayer3)

// copying objects
// first value in assign fun is source object and others are added objects;
// if other objects have same keys then it will modify them rather then adding;
// cause we cant have same keys in a object;
// 1st method
let allplayers = Object.assign({},player1)
allplayers.name = "xombie"
console.log(allplayers)
console.log(player1)


// 2nd method
// same for arrays
let a = {a:1 , b:2};
let b = {c:3 ,d:4};
let c = {...a,...b};
console.log(c)


// no modificatiion is allowed with freeze method
Object.freeze(player1);
player1.name = "nek0";
console.log(player1)

// modificationn is allowed but addition and deletion is probhited with seal;
Object.seal(player2);
player2.sword = 'katana';
delete player2.name;
console.log(player2)


