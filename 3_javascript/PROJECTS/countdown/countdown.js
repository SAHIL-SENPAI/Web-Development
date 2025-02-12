function fun(){
    let date1 = new Date();
    let target_date = new Date('2028-07-14T00:00:00');
    const date = target_date - date1;  
    const days = Math.floor(date/(1000*60*60*24))
    const hours = Math.floor((date/(1000*60*60))%24)
    const minutes = Math.floor((date/(1000*60))%60)
    const seconds = Math.floor((date/(1000))%60)
    const a = document.getElementsByClassName('day');
    const b = document.getElementsByClassName('hour');  
    const c = document.getElementsByClassName('minute');
    const d = document.getElementsByClassName('second');
    a[0].innerHTML = days;
    b[0].innerHTML = hours;
    c[0].innerHTML = minutes;
    d[0].innerHTML = seconds;
    if(date<0){
        a[0].innerHTML = 0;
        b[0].innerHTML = 0;
        c[0].innerHTML = 0;
        d[0].innerHTML = 0;
    }
    

      
}

setInterval(fun,1000)