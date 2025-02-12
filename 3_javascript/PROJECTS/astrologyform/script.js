const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

const compliments = [
    "You have a great sense of humor!",
    "You're an amazing friend.",
    "Your positivity is contagious.",
    "You have a kind heart.",
    "You're incredibly talented!",
    "Your smile lights up the room.",
    "You're a great listener.",
    "You have a unique perspective on things.",
    "You're a fantastic problem solver.",
    "Your creativity is inspiring.",
    "You're always so thoughtful.",
    "You bring out the best in people.",
    "Your determination is admirable.",
    "You're such a hard worker.",
    "You make the world a better place.",
    "You're full of brilliant ideas!",
    "You're so reliable and trustworthy.",
    "Your confidence is inspiring.",
    "You're an excellent communicator.",
    "You have a great sense of style.",
    "Your kindness makes a difference.",
    "You're always learning and growing.",
    "You have a way of making things fun.",
    "You're a great leader.",
    "You're full of positive energy.",
    "You inspire others to be their best.",
    "Your enthusiasm is refreshing.",
    "You're incredibly smart!",
    "You make people feel special.",
    "You're always there when needed.",
    "You have a beautiful soul."
];

const victimCardCompliments = [
    "You always do good for others, but they never appreciate it.",
    "You put everyone else first, but no one does the same for you.",
    "You give your all, yet people take you for granted.",
    "You always help others, but they disappear when you need them.",
    "You're too kind for this cruel world.",
    "You always forgive, but no one ever apologizes to you.",
    "You never get the credit you deserve.",
    "You're always there for people, but they leave when you need support.",
    "You put in the effort, but others get the rewards.",
    "You're too pure-hearted for this world.",
    "You care too much, but no one cares back.",
    "People take advantage of your kindness.",
    "You work so hard, but life keeps testing you.",
    "You always give second chances, but no one gives you one.",
    "You understand everyone, but no one understands you.",
    "You go out of your way for people, but they never return the favor.",
    "You're always strong for others, but no one is strong for you.",
    "You never ask for much, yet people still let you down.",
    "You support everyone’s dreams, but no one supports yours.",
    "You're always the bigger person, but it never seems to matter."
];

const recommendations = [
    "Read 'Atomic Habits' by James Clear for self-improvement.",
    "Watch 'The Social Dilemma' to understand social media's impact.",
    "Start learning a new language like Spanish or Japanese.",
    "Exercise for at least 30 minutes daily for better health.",
    "Try meditation for mental clarity and stress reduction.",
    "Invest in index funds for long-term financial growth.",
    "Learn basic cooking skills to eat healthier and save money.",
    "Read 'The Subtle Art of Not Giving a F*ck' by Mark Manson.",
    "Practice gratitude journaling to boost happiness.",
    "Take a digital detox for one day every week.",
    "Watch 'Inception' if you love mind-bending movies.",
    "Read 'Rich Dad Poor Dad' for financial literacy.",
    "Start a side hustle for additional income streams.",
    "Improve your sleep schedule for better productivity.",
    "Try intermittent fasting for better metabolism.",
    "Learn public speaking to improve confidence.",
    "Take a break from social media to clear your mind.",
    "Read 'The Alchemist' for a dose of motivation.",
    "Start a habit of daily reading for knowledge expansion.",
    "Learn basic first-aid skills for emergencies.",
    "Drink more water daily to stay hydrated and healthy.",
    "Watch 'Breaking Bad' if you love thrilling stories.",
    "Try journaling your thoughts for self-reflection.",
    "Learn a musical instrument like guitar or piano.",
    "Follow a to-do list system for better productivity.",
    "Start investing in crypto after understanding the risks.",
    "Try minimalism to declutter your life and mind.",
    "Practice deep breathing exercises to reduce anxiety.",
    "Read 'Sapiens' by Yuval Noah Harari for historical insights.",
    "Start networking with like-minded people for growth."
];

const astrologyPredictions = [
    "A new opportunity will come your way soon.",
    "You will reconnect with an old friend unexpectedly.",
    "A financial boost is on the horizon for you.",
    "Someone special will enter your life very soon.",
    "Your hard work will soon be recognized and rewarded.",
    "A major life decision will shape your future path.",
    "Trust your intuition; it will guide you correctly.",
    "New experiences will bring wisdom and personal growth.",
    "A challenge ahead will lead to great success.",
    "A deep conversation will reveal important truths.",
    "Positive energy surrounds your relationships this month.",
    "Your creativity will bring unexpected opportunities.",
    "A long-awaited message will finally reach you.",
    "Your patience will pay off in unexpected ways.",
    "An exciting journey is coming your way.",
    "A change in routine will bring fresh energy.",
    "You will overcome a fear that has held you back.",
    "A small risk will lead to a big reward.",
    "Someone will offer you valuable guidance soon.",
    "Happiness and balance will be restored in your life."
];

const form = document.getElementById("astro-form")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const day = Number(document.getElementById("day").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);
    const result = document.getElementById("output");

    const first_message = `hello ${name} ${surname}`;
    const second_message = `your Zodiac Sign is ${zodiacSigns[month-1]}`
    const third_message = compliments[day-1];
    let index = Math.floor(Math.random()*20);
    const forth_message = victimCardCompliments[index];
    index = (name.length*surname.length*year)%30;
    const fifth_message = recommendations[index];
    index = (day*month*year)%20;
    const sixth_message = astrologyPredictions[index];

    result.innerHTML =`${first_message},${second_message} ${third_message} ${forth_message} ${fifth_message} ${sixth_message}`;
})








