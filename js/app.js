// <!-- © Ryn#2512 | Need Help Message me on Discord -->

//Element & ID Declaration
document.getElementById('mainlogo').src = config.text.mainlogo;
document.getElementById('servertitle').innerHTML = config.text.servertitle;
document.getElementById('songname').innerHTML = config.text.songname;
document.getElementById('pausetext').innerHTML = config.text.pausetext;

var audio = `<div data-video=${music.videoID} data-autoplay="1" data-loop="1" id="youtube-audio"> </div>`;
if (music.music === true) {
    $("body").append(audio);
}

// Taken/Forked From https://cdn.rawgit.com/labnol/files/master/yt.js
function onYouTubeIframeAPIReady() {
    var e = document.getElementById("youtube-audio"),
        t = document.createElement(null);
    e.appendChild(t);
    var a = document.createElement("div");
    a.setAttribute("id", "youtube-player"), e.appendChild(a);
    var o = function(e) {
        t.setAttribute("src", "https://i.imgur.com/" + a)
    };
    e.onclick = function() { r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING ? (r.pauseVideo(), o(!1)) : (r.playVideo(), o(!0)) };
    var r = new YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: e.dataset.video,
        playerVars: { autoplay: e.dataset.autoplay, loop: e.dataset.loop },
        events: {
            onReady: function(e) {
                r.setPlaybackQuality("small"), r.setVolume(music.musicVolume)
                o(r.getPlayerState() !== YT.PlayerState.CUED)
            },
            onStateChange: function(e) { e.data === YT.PlayerState.ENDED && o(!1) }
        }
    })
}

var count = 0;
var thisCount = 0;


const handlers = {
    startInitFunctionOrder(data) {
        count = data.count;
    },

    initFunctionInvoking(data) {
        document.querySelector('.Rynxd').style.left = '0%';
        document.querySelector('.Rynxd').style.width = ((data.idx / count) * 100) + '%';
    },

    startDataFileEntries(data) {
        count = data.count;
    },

    performMapLoadFunction(data) {
        ++thisCount;
        document.querySelector('.Rynxd').style.left = '0%';
        document.querySelector('.Rynxd').style.width = ((thisCount / count) * 100) + '%';
    },
};

window.addEventListener('message', function(e) {
    (handlers[e.data.eventName] || function() {})(e.data);
});