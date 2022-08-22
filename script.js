//Grabbed the classes of (hour, second, and minute) div and stored then in seprite variables.
let hourDiv = document.querySelector('.hour')
let secondDiv = document.querySelector('.second')
let minuteDiv = document.querySelector('.minute')

//updateClock function will get the time from computer and change rotation of the divs to their correct postion according to the time.
let updateClock = () => {
    const currentDate = new Date();
    setTimeout (updateClock, 1000);//will exacute updateClock evey second
    const hour = currentDate.getHours();//has the vaule of the computers hour
    const minute = currentDate.getMinutes();//has the vaule of the computers minute
    const second = currentDate.getSeconds();//has the vaule of the computers second
    const hourDeg = (hour / 12) * 360;//to get the deg we want the hour to be
    const secondDeg = (second / 60) * 360;//to get the deg we want the second to be
    const minuteDeg = (minute / 60) * 360;//to get the deg we want the minute to be
    hourDiv.style.transform = `rotate(${hourDeg}deg)`//change the css of transform
    secondDiv.style.transform = `rotate(${secondDeg}deg)`//change the css of transform
    minuteDiv.style.transform = `rotate(${minuteDeg}deg)`//change the css of transform
}

updateClock()

//secondary way of exacuting this code.
// setInterval(updateClock, 1000)