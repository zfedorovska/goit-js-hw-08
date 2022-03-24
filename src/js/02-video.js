import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
setVideoPlayerCurrentTime();

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(event) {
    localStorage.setItem("videoplayer-current-time",event.seconds);
}

function setVideoPlayerCurrentTime() {
    let currentTime = localStorage.getItem("videoplayer-current-time");
    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
}

