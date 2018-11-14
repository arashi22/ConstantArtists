function startTime() {
    var today = new Date();
    var hours = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementsByClassName("currentTime")[0].innerHTML =
        hours + ":" + min + ":" + sec;
    var time = setTimeout(startTime, 500);

    var date = new Date();
    var utcDate = new Date(date.toUTCString());
    utcDate.setHours(utcDate.getHours()-12);
    var usDate = new Date(utcDate);
    console.log(usDate);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}