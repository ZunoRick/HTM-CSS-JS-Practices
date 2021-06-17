document.addEventListener('DOMContentLoaded', () => {
    throwDice();
});

function throwDice() {
    const button = document.querySelector('button');
    button.addEventListener('click', e => {
        e.preventDefault();
        let showFace = document.querySelector('.show');
        let num = Math.floor(Math.random() * (6) + 1);
        const face = document.querySelector(`.face-${num}`)
        if (!face.className.includes('show')) {
            showFace.classList.remove('show');
            face.classList.toggle('show');
        }
    });
}