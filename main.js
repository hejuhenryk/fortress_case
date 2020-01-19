import { numberToPrice, numberToPhoneNumber } from './helper.js'


fetch('./data.json', {method: 'GET'})
    .then( resp => resp.json() )
    .then( adObject => {
        renderTitle(adObject)
        renderDetails(adObject)
        renderAdInfoContact(adObject.address.street, adObject.address.zipCode + ' ' + adObject.address.city, 'Adresse')
        renderAdInfoContact(adObject.contact.name, numberToPhoneNumber(adObject.contact.phone), 'Kontakt')
    })
    .catch( err => console.log('Data not fetched' , err) )

const DOMstr = {
    title: document.querySelector('.title'),
    details: document.querySelector('.details'),
    contacts: document.querySelector('.contacts'),
    template_detail: document.querySelector('#detail_template'),
    template_contact: document.querySelector('#contact_template')
}

const renderAdInfoDetail = (detailName, detailValue) => {
    const template = DOMstr.template_detail
    const placeToAppend = DOMstr.details
    const clonedTemplate = template.content.cloneNode(true)
    clonedTemplate.querySelector('.detail_name').textContent = detailName
    clonedTemplate.querySelector('.detail_value').textContent = detailValue
    placeToAppend.appendChild(clonedTemplate)
}

const renderAdInfoContact = (lineOne, lineTwo, title) => {
    const template = DOMstr.template_contact
    const placeToAppend = DOMstr.contacts
    const clonedTemplate = template.content.cloneNode(true)
    clonedTemplate.querySelector('.detail_name').textContent = title
    clonedTemplate.querySelector('.one').textContent = lineOne
    clonedTemplate.querySelector('.two').textContent = lineTwo
    placeToAppend.appendChild(clonedTemplate)
}

const renderTitle = (adInfo) => {
    if (adInfo.title) {
        adInfo.title.forEach(titlePart => {
            const titleH1 = document.createElement('h1')
            titleH1.textContent = titlePart
            if (DOMstr.title)
                DOMstr.title.appendChild(titleH1)
        });
    }
}

const renderDetails = (adInfo) => {
    if (adInfo.details) {
        adInfo.details.forEach(detInfo => {
            renderAdInfoDetail(detInfo.name, typeof detInfo.value === 'number' ? numberToPrice(detInfo.value) : detInfo.value)
        })
    }
}
// const setDetails = (jsonObj, where) => {
//     const obj = JSON.parse(jsonObj)
//     if (obj.details) {
//         obj.details.forEach(detInfo => {
//             let value
//             if (typeof detInfo.value === 'number') {
//                 detInfo.value = numberToPrice(detInfo.value)
//             } 
//             const detailNode = `<div class="detail"><h2 class="detail_name">${detInfo.name}</h2><h2 class="detail_value">${detInfo.value}</h2></div>`
//             where.insertAdjacentHTML('beforeend', detailNode)
//         });
//     }
// }
// const setContact = (jsonObj, where) => {
//     const obj = JSON.parse(jsonObj)

//     if (obj.contact) {
//     const detailNode = `<div class="contact_detail"><h2 class="detail_name">Kontact</h2><h2 class="detail_value">${obj.contact.name}</h2><h2 class="detail_value">${numberToPhoneNumber(obj.contact.phone)}</h2></div>`
//         where.insertAdjacentHTML('beforeend', detailNode)
//     }
// }
// const setAddress = (jsonObj, where) => {
//     const obj = JSON.parse(jsonObj)

//     if (obj.address) {
//     const detailNode = `<div class="contact_detail"><h2 class="detail_name">Adresse</h2><h2 class="detail_value">${obj.address.street}</h2><h2 class="detail_value">${obj.address.zipCode} ${obj.address.city}</h2></div>`
//         where.insertAdjacentHTML('beforeend', detailNode)
//     }
// }


// setTitle(JSONdata, DOMstr.title)

// setDetails(JSONdata, DOMstr.details)

// setContact(JSONdata, DOMstr.contacts)
// setAddress(JSONdata, DOMstr.contacts)


// const im = document.querySelector('#userImage')
// const rectangle = { left: 0, top: 0, width: 500, height: 50 };
// Tesseract.recognize(im, 'nor', { rectangle }).then((result) => {
//     console.log(result.text);
//     console.log(resArr)
// });



/*

Lekker, unik og moderne toppleilighet med balkong!
Høy standard, 3-soverom, 2-bad.

Fellesgjeld 300.500,- Omkostninger 15.000,-
Totalpris 16.300.500; Boligtype Aksjeleilighel
Fellesgjeld 3050,- Energimerking L-rød
Adresse Kontakt

Ivan Bjørndalsgate 34, Jan-Petter Grønborg

0258 Oslo +47 929 92 929

*/
