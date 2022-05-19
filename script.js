function keyAnimation(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('letra-elegida');
    setTimeout(() => {key.classList.remove('letra-elegida')},100)
}
 window.addEventListener('keydown', keyAnimation);