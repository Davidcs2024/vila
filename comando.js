const yesBtn = document.getElementById('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('SOY UN GRAN IDIOTA, PERDONAME')
    alert('¿PODEMOS PLATICAR EN PERSONA?')
});

const noBtn = document.getElementById('#noBtn');

function moveButton() {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
}

noBtn.addEventListener('mouseover', moveButton);

noBtn.addEventListener('touchmove', function (e) {
    e.preventDefault(); 
    moveButton();
});