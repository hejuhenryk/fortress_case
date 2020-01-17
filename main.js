import { numberToPrice, numberToPhoneNumber } from './helper.js'


const data = {
    title: ["Lekker, unik og moderne toppleilighet med balkong!", "Høy standard, 3-soverom, 2-bad."],
    details: [
        { "name": "fellesgjeld", "value": 300500 },
        { "name": "omkostninger", "value": 15000 },
        { "name": "totalpris", "value": 16300500 },
        { "name": "boligtype", "value": "aksjeleilighel" },
        { "name": "fellesgjeld", "value": 3050 },
        { "name": "energimerking", "value": "l-røde" }
    ],
    contact: {
        name: "Jan-Petter Grønborg",
        phone: "92992929",
    },
    address: {
        street: "Ivan Bjørndalsgate 34",
        city: "Oslo",
        zipCode: "0258"
    }
}
const JSONdata = (JSON.stringify(data))

const DOMstr = {
    title: document.querySelector('.title'),
    details: document.querySelector('.details'),
    contacts: document.querySelector('.contact')
}

const setTitle = (jsonObj, where) => {
    const obj = JSON.parse(jsonObj)
    if (obj.title) {
        obj.title.forEach(titlePart => {
            const titleH1 = document.createElement('h1')
            titleH1.textContent = titlePart
            if (where)
                where.appendChild(titleH1)
        });
    }
}

const setDetails = (jsonObj, where) => {
    const obj = JSON.parse(jsonObj)
    if (obj.details) {
        obj.details.forEach(detInfo => {
            let value
            if (typeof detInfo.value === 'number') {
                detInfo.value = numberToPrice(detInfo.value)
            } 
            const detailNode = `<div class="detail"><h2 class="detail_name">${detInfo.name}</h2><h2 class="detail_value">${detInfo.value}</h2></div>`
            where.insertAdjacentHTML('beforeend', detailNode)
        });
    }
}
const setContact = (jsonObj, where) => {
    const obj = JSON.parse(jsonObj)

    if (obj.contact) {
    const detailNode = `<div class="contact_detail"><h2 class="detail_name">Kontact</h2><h2 class="detail_value">${obj.contact.name}</h2><h2 class="detail_value">${numberToPhoneNumber(obj.contact.phone)}</h2></div>`
        where.insertAdjacentHTML('beforeend', detailNode)
    }
}
const setAddress = (jsonObj, where) => {
    const obj = JSON.parse(jsonObj)

    if (obj.address) {
    const detailNode = `<div class="contact_detail"><h2 class="detail_name">Adresse</h2><h2 class="detail_value">${obj.address.street}</h2><h2 class="detail_value">${obj.address.zipCode} ${obj.address.city}</h2></div>`
        where.insertAdjacentHTML('beforeend', detailNode)
    }
}


setTitle(JSONdata, DOMstr.title)

setDetails(JSONdata, DOMstr.details)

setContact(JSONdata, DOMstr.contacts)
setAddress(JSONdata, DOMstr.contacts)


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
