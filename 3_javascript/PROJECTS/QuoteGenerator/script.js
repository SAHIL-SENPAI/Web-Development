const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe"
];




// function newQuote(){
//     const element = document.getElementsByClassName('quote')[0];
//     const randomnumber = Math.floor(Math.random()*quotes.length);
//     element.innerHTML = quotes[randomnumber];
    
// }

// setInterval(newQuote, 4000);

const button = document.getElementById("btn");
button.addEventListener("click",()=>
{
    const element = document.getElementsByClassName('slideinfromright')[0];
    const randomnumber = Math.floor(Math.random()*quotes.length);
    element.innerHTML = quotes[randomnumber];
    element.classList.remove('slideinfromright');
    void element.offsetWidth;
    element.classList.add('slideinfromright');

})


