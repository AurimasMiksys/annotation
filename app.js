class Utils {
    
   get generateId() {
    return Date.now()
    }
}

let utils = new Utils()
console.log(utils)

class CreateCard {
    constructor(elements) {
        this.formInput = elements.formInput
        this.submitButton = elements.submitButton
        this.listOfCardsContainer = elements.listOfCardsContainer
        this.iid = pin.id
        this.deleteButton = elements.deleteButton
        this.cardToDelete = elements.cardToDelete
        this.closeCardButton = elements.closeCardButton
    }
    userClicksButton() {
        this.submitButton.addEventListener('click', this.createNewCardOnUi.bind(this))
    }
    createNewCardOnUi(event) {
        event.preventDefault()
        const newCard = document.createElement('div')
        newCard.setAttribute('class', 'card border mt-1 rounded-0')
        newCard.innerHTML = `<div class="card-body d-flex justify-content-end" id="${this.iid}" coordinates="${this.x}${this.y}">
        <button type="submit" class="btn btn-primary btn-sm rounded-0" id="closecard">X</button>
        </div>
        <p class="p-1 text-left">${this.formInput.value}</p>
        <button type="submit" class="btn btn-primary btn-lg rounded-0" id="deletebutton">Delete</button>
        </div>`
        this.listOfCardsContainer.appendChild(newCard)
        
        this.saveCardToLocal(this.iid, this.formInput.value)
    }

    saveCardToLocal(id, inputValue) {
        let cards
    if (localStorage.getItem('cards') === null) {
    cards = {}
    } else {
    cards = JSON.parse(localStorage.getItem('cards'))
    }

    cards[id] = {
    CardsID: id,    
    text: inputValue,
    }

    localStorage.setItem('cards', JSON.stringify(cards))
    console.log('I save a card to a local storage')
    }

    getCardsFromLocal() {
        let cards
        if (localStorage.getItem('cards') === null) {
          cards = {}
        } else {
          cards = JSON.parse(localStorage.getItem('cards'))
        }
        for (let id in cards) {
        const newCard = document.createElement('div')
        newCard.setAttribute('class', 'card border mt-1 rounded-0')
        newCard.innerHTML = `<div class="card-body d-flex justify-content-end" id="${this.iid}" coordinates="${this.x}${this.y}">
        <button type="submit" class="btn btn-primary btn-sm rounded-0" id="closecard">X</button>
        </div>
        <p class="p-1 text-left">${this.formInput.value}</p>
        <button type="submit" class="btn btn-primary btn-lg rounded-0" id="deletebutton">Delete</button>
        </div>`
        this.listOfCardsContainer.appendChild(newCard)
    }
}

    userClicksDeleteButton() {
        this.deleteButton.addEventListener('click', this.deleteCardOnUi.bind(this))
    }
    deleteCardOnUi(event) {
        this.cardToDelete.remove()
        console.log(event, 'I delete card on UI')
    }

    userClicksCloseButton(event) {
        this.closeCardButton.addEventListener('click', this.closeCardOnUi.bind(this))
    }

    closeCardOnUi(event) {
        this.cardToDelete.remove()
        console.log(event, 'I close card on UI')
    }
}

class Pin {
    constructor(elements) {
        this.imageContainer = elements.imageContainer
        this.formField = elements.formField
        this.x = elements.x
        this.y = elements.y
        this.id = utils.generateId

    }
    userDoubleClicksToCreatePin() {
        this.imageContainer.addEventListener('dblclick', this.createPinOnUiAndOpenFormField.bind(this))
    }
    createPinOnUiAndOpenFormField(event) {
        console.log('I create Pin on UI')
        let x = event.clientX
        let y = event.clientY
        const newDot = document.createElement('div')
        newDot.innerHTML = `<span class="point" data-card-id="${this.id}" style="position: absolute; top: ${y}px; left: ${x}px; background: #22b2ea; width: 15px; height: 15px; border: solid 0.1px; border-radius: 5px;"></div>`
        document.querySelector('body').appendChild(newDot)
        this.formField.removeAttribute('style')
        this.savePinToLocal(this.id, x, y)
    }
    savePinToLocal(id,x,y) {
        let pins
    if (localStorage.getItem('pins') === null) {
    pins = {}
    } else {
    pins = JSON.parse(localStorage.getItem('pins'))
    }

    pins[id] = {
    CardsID: id,
    CoordX: x,
    CoordY: y
    }

    localStorage.setItem('pins', JSON.stringify(pins))
    console.log('I save a pin to local storage')
    }

    getPinsOnUiFromLocal() {
    document.addEventListener('DOMContentLoaded', this.getPinsFromLocal.bind(this))
    }

    getPinsFromLocal() {
        let pins
        if (localStorage.getItem('pins') === null) {
          pins = {}
        } else {
          pins = JSON.parse(localStorage.getItem('pins'))
        }
        for (let id in pins) {
        const newDot = document.createElement('div')
        newDot.innerHTML = `<span class="point" data-card-id="${pins[id].CardsID}" style="position: absolute; top: ${pins[id].CoordY}px; left: ${pins[id].CoordX}px; background: #22b2ea; width: 15px; height: 15px; border: solid 0.1px; border-radius: 5px;"></div>`
        document.querySelector('body').appendChild(newDot)
        }
        //Event Listener to click on the blue dot
        document.querySelectorAll('.point').forEach((blueDot) => {
        blueDot.addEventListener('click', this.clickPinToShowCardFromLocal)
        
        })
    }
    
    clickPinToShowCardFromLocal(event) {
        let item = event.target
        let id = item.getAttribute('data-card-id')
        console.log(id)
 
    let cards
    if (localStorage.getItem('cards') === null) {
    cards = {}
    } else {
    cards = JSON.parse(localStorage.getItem('cards'))
    }

    const card = cards[id]
    if(!card) return

    const newCard = document.createElement('div')
        newCard.setAttribute('class', 'card border mt-1 rounded-0')
        newCard.innerHTML = `<div class="card-body d-flex justify-content-end" id="${cards[id].CardsID}" coordinates="${this.x}${this.y}">
        <button type="submit" class="btn btn-primary btn-sm rounded-0" id="closecard">X</button>
        </div>
        <p class="p-1 text-left">${card.text}</p>
        <button type="submit" class="btn btn-primary btn-lg rounded-0" id="deletebutton">Delete</button>
        </div>`
        document.querySelector('#list').appendChild(newCard)
        }
        
}

    



class State {
    constructor(activeDisabledButton) {
    this.activeDisabledButton = activeDisabledButton
}
active() {
    this.activeDisabledButton.addEventListener('click', this.activatePage.bind(this))
}

activatePage(event) {
    let item = event.target
    if (item.innerHTML === 'Disabled') {
        item.innerHTML = 'Active'
    } else {
        item.innerHTML = 'Disabled'
    }
    console.log('I activate Page')
}
}

//App
//Create Card

const pin = new Pin({
    imageContainer: document.querySelector('img'),
    formField: document.querySelector('form')})


pin.getPinsOnUiFromLocal()
pin.userDoubleClicksToCreatePin()


const card = new CreateCard({
    formInput: document.querySelector('#forminput'),
    submitButton: document.querySelector('#formsubmitbutton'),
    listOfCardsContainer: document.querySelector('#list'),
    deleteButton: document.querySelector('button#deletebutton.btn.btn-primary.btn-lg.rounded-0'),
    cardToDelete: document.querySelector('button#deletebutton.btn.btn-primary.btn-lg.rounded-0').parentElement.parentElement,
    closeCardButton: document.querySelector('#closecard')
})
card.userClicksButton()
card.userClicksDeleteButton()
// card.userClicksCloseButton()

const state = new State(document.querySelector("#activedisabledbutton"))

state.active()


