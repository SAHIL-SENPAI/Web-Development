// const d = new Date()
// console.log(d)
// console.log(d.toDateString())
// console.log(d.toString())
// console.log(new Date(1734345817354))
// console.log(d.getTime()) 

// working countdown timer

function fun(){
    let date1 = new Date();
    let target_date = new Date('2025-01-01T00:00:00');
    const date = target_date - date1;  
    const days = Math.floor(date/(1000*60*60*24))
    const hours = Math.floor((date/(1000*60*60))%24)
    const minutes = Math.floor((date/(1000*60))%60)
    const seconds = Math.floor((date/(1000))%60)
    console.log(`2025 COUNTDOWN = DAYS:${days} HOURS:${hours} MINUTES:${minutes} SECONDS:${seconds} MILLISECONDS:${date%1000}`)
       
}

setInterval(fun,1000)
