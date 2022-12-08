const Button = document.querySelector('.switchButton');
const Video = document.querySelector('.videoContainer');

//Adding/Removing Slide Class to Buttons
Button.addEventListener('click', function() {
    if (!Button.classList.contains('slide')) {
        Button.classList.add('slide');
        Video.pause();
    } else {
        Button.classList.remove('slide');
        Video.play();
    }
})