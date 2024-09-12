const hoverDiv = document.querySelectorAll('.custom');
const courseShadow = document.querySelector('#courses')
const msInfo = document.querySelector('#ms-info')
const tallyInfo = document.querySelector('#tally-info')
const cInfo = document.querySelector('#c-info')
const infoAll = document.querySelectorAll('.hidden')
const hero = document.querySelector('.hero')
courseShadow.addEventListener('click', () => {
    hoverDiv.forEach((e) => {
        e.classList.add('shadow-custom')
    })
})
hoverDiv.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('shadow-custom')
    })
    element.addEventListener('mouseleave', () => {
        element.classList.remove('shadow-custom')
    })
});
function forInfo1() {
    msInfo.classList.remove('hidden')
    msInfo.classList.toggle('add')
}
function forInfo2() {
    tallyInfo.classList.toggle('add')
    tallyInfo.classList.remove('hidden')
}
function forInfo3() {
    cInfo.classList.toggle('add')
    cInfo.classList.remove('hidden')
}
hero.addEventListener('mouseup',()=>infoAll.forEach((e)=>e.classList.add('hidden')))


