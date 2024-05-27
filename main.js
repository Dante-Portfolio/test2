const list = document.getElementsByTagName('li');
console.log(list);


for (let contador = 0; contador < list.length; contador++) {
    setTimeout(() => animation(contador), 200 * contador);
    setTimeout(() => animation2(contador), 200 * contador);
}

function animation(contador) {
    let element = list[contador];
    element.style.transform = "rotate(180deg)";
}

function animation2(contador) {
    let element = list[contador];
    element.style.transform = "rotate(360deg)";
}


