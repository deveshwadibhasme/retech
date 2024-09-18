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


// let keyStoreName = []
// applicantName.addEventListener('change', (key) => {
//     const uniqueKey = `${`Name`}${new Date().getTime()}`
//     localStorage.setItem(uniqueKey,
//         key.target.value
//     )
//     keyStoreName.push(uniqueKey)
// })
// let keyStoreEducation = []
// applicantEducation.addEventListener('change', (key) => {
//     const uniqueKey = `${`Education`}${new Date().getTime()}`
//     localStorage.setItem(uniqueKey,
//         key.target.value
//     )
//     keyStoreEducation.push(uniqueKey)
// })
// let keyStoreNumber = []
// applicantNumber .addEventListener('change', (key) => {
//     const uniqueKey = `${`Number`}${new Date().getTime()}`
//     localStorage.setItem(uniqueKey,
//         key.target.value
//     )
//     keyStoreNumber.push(uniqueKey)
// })


// // applicantEducation.addEventListener('input', (key) => {
// //     localStorage.setItem('education', key.target.value)
// // })
// // applicantNumber.addEventListener('input', (key) => {
// //     localStorage.setItem('number', key.target.value)
// // })
// applicantAddress.addEventListener('input', (key) => {
//     localStorage.setItem('address', key.target.value)
// })


// let tableData = document.querySelector('#table-data')
// let localName = ''
// function showValue() {
//     const div = document.createElement('div')
//     div.classList.add('grid')
//     div.classList.add('grid-cols-4')
//     for (let i = 0; i < keyStoreName.length; i++) {
//         const keyHold = keyStoreName[i]
//         localName = localStorage.getItem(`${keyHold}`)
//     }
//     let localEducation
//     for (let i = 0; i < keyStoreEducation.length; i++) {
//         const keyHold = keyStoreEducation[i]
//         localEducation = localStorage.getItem(`${keyHold}`)
//     }
//     let localNumber
//     for (let i = 0; i < keyStoreNumber.length; i++) {
//         const keyHold = keyStoreNumber[i]
//         localNumber = localStorage.getItem(`${keyHold}`)
//     }

//     div.innerHTML = `<div>${localName}</div>
//                     <div>${localEducation}</div>
//                     <div>${localNumber}</div>
//                     <div>${localStorage.getItem('address')}</div>`
//     entryList.appendChild(div)
// }


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