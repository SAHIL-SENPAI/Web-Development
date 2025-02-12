let dummydata = [];
const img_array = ["first","second","third","fourth","fifth","sixth","seventh","eight","ninth","tenth"]
const restaurantNames = [
    "The Tasty Fork",
    "Sizzle & Spice",
    "Urban Bites",
    "The Hungry Table",
    "Flavors & Fire",
    "Golden Spoon Bistro",
    "Savory Street",
    "Crave Kitchen",
    "The Cozy Plate",
    "Midnight Bites Café"
];
const foodTypes = [
    "Italian",
    "Mexican",
    "Japanese",
    "Indian",
    "Chinese",
    "Mediterranean",
    "French",
    "Thai",
    "Korean",
    "American"
];
const delhiLocations = [
    "Connaught Place",
    "Chandni Chowk",
    "Hauz Khas",
    "Karol Bagh",
    "Lajpat Nagar",
    "Saket",
    "Rajouri Garden",
    "Greater Kailash",
    "Dwarka",
    "Vasant Kunj"
];








for(let i = 0 ; i<100 ; i++){
    let obj = {};
    obj["image"] = img_array[Math.floor(Math.random()*10)];
    obj["restaurant"] = restaurantNames[Math.floor(Math.random()*restaurantNames.length)]

    const r = (Math.random()*5+1).toFixed(2);
    if(r>5){
        obj["rating"] = 5;
    }
    else{
        obj["rating"] = r;
    }
    obj["food_type"] = foodTypes[Math.floor(Math.random()*foodTypes.length)]
    obj["price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["location"] = delhiLocations[Math.floor(Math.random()*10)];
    obj["distance"] = (Math.random()*10+1).toFixed(2);
    obj['offers'] = Math.floor(Math.random()*50+15);
    obj["alcohol"] = Math.random() > 0.7;
    obj["restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["restaurant_close_time"] = (obj["restaurant_open_time"] + 12)%24;

    dummydata.push(obj);

}

console.log(dummydata
    
)



