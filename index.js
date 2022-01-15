const button = document.getElementById("button");
const input = document.getElementById("dateInput")

const ddayClock = document.querySelector("h2#ddayClock")

function calculateDday() {
    const now = new Date();
    const dday = new Date(input.value);

    const timeDifference = dday.getTime() - now.getTime();

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = '0' + s;
    }

    ddayClock.innerText = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}








