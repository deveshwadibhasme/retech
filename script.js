function loader() {
    document.querySelector('#preloader').style.transform = 'translateY(-100%)'
}
function scrolling() {
    document.body.style.overflow = 'visible'
}
window.addEventListener('load', () => {
    loader();
    setTimeout(scrolling,1000)
})

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
courseShadow.addEventListener('touchdown', () => {
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
    msInfo.classList.toggle('hidden')
    msInfo.classList.toggle('add')
}
function forInfo2() {
    tallyInfo.classList.toggle('add')
    tallyInfo.classList.toggle('hidden')
}
function forInfo3() {
    cInfo.classList.toggle('add')
    cInfo.classList.toggle('hidden')
}
hero.addEventListener('mouseup', () => infoAll.forEach((e) => e.classList.add('hidden')))

const pass = ['mac', 'macnil@123', 'nil', 'retech@123']

const password = document.querySelector('#password')
const view = document.querySelector('#view')
password.addEventListener('input', (e) => {
    if (pass.includes(e.target.value)) {
        view.removeAttribute('disabled')
        view.style.backgroundColor = 'green'
        password.style.outline = '2px solid green'
    }
    else {
        view.toggleAttribute('disabled')
        view.style.backgroundColor = 'rgb(200,8,8)'
    }
})
const entryList = document.querySelector('#entry-list')
function showList() {
    entryList.classList.remove('hidden')
}
function hideList() {
    entryList.classList.add('hidden')
}

const applicantName = document.querySelector('#name')
const applicantEducation = document.querySelector('#education')
const applicantNumber = document.querySelector('#number')
const applicantAddress = document.querySelector('#address')

function showValue(){
   const form =  document.forms['submit-to-google-sheet']
   setTimeout(()=>{
    form.reset();
   },1000)
}

const testinomial = document.querySelector('.testinomial')

fetch('data.json').then((res) => res.json()).then((data) => {
    console.log(data)
    data.forEach(entry => {
        const div = document.createElement('div')
        div.classList.add('testino')
        div.innerHTML = `<div class="client-name">${entry.name}</div>
                <div class="comment">${entry.comment}</div>`
        testinomial.appendChild(div)
    });
}
)

