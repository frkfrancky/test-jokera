function clikeo() {
    // var menu = document.getElementsByClassName('menu');
    var menu = document.getElementById('hu');
    menu.classList.toggle('block')
}


setTimeout(() => {
    document.querySelector('.preloader').style.display = "none";
    document.getElementById('cont').classList.add('block');
}, 2500);


function animation(element, mouvement) {
    const { scrollTop, clientHeight } = document.documentElement;
    const see = element.getBoundingClientRect().top;
    if (scrollTop > (scrollTop + see).toFixed() - clientHeight * 0.99) {
        element.classList.add(mouvement);
    }
}
// const test = document.getElementById('ty');
// animation(test, 'slidedown');
// const titre = document.querySelector('.title');
// animation(titre, 'fadein');
// const anime1 = document.querySelector('.anime1');
// animation(anime1, 'slideleft');
// window.addEventListener('scroll', () => {
//     const anime2 = document.querySelector('.anime2');
//     const anime3 = document.querySelector('.anime3');
//     animation(anime2, 'slideleft');
//     animation(anime3, 'slideleft');
//     const anime4 = document.querySelector('.anime4');
//     animation(anime4, 'slideright');
//     const anime5 = document.querySelector('.anime5');
//     console.log(anime5)
//     animation(anime5, 'slideleft');
//     const anime8 = document.querySelector('.slide-photo');
//     animation(anime8, 'slideright');
// })