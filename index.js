let numberOfDrums = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        const audioElement = new Audio('sounds/tom-1.mp3');
        audioElement.play();
    });
    
}