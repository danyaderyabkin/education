function readMore() {
    let nope = document.querySelector('.nope');
    let text = document.querySelector('.hidden-text');
    let btn = document.querySelector('.hidden-button');

    if (nope.style.display === "none") {
        nope.style.display = "inline";
        text.style.display = "none";
        btn.innerHTML = "Продолжение...";
    } else {
        nope.style.display = "none";
        text.style.display = "inline";
        btn.innerHTML = "Скрыть";
    }
}