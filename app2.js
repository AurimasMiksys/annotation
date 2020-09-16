class CreateCard {
    constructor(elements) {
        this.formInput = elements.formInput
        this.submitButton = elements.submitButton
        this.listOfCardsContainer = elements.listOfCardsContainer
        this.iid = elements.iid
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
        newCard.innerHTML = `<div class="card-body d-flex justify-content-end" id="${this.iid}">
        <button type="submit" class="btn btn-primary btn-sm rounded-0" id="closecard">X</button>
        </div>
        <p class="p-1 text-left">${this.formInput.value}</p>
        <button type="submit" class="btn btn-primary btn-lg rounded-0" id="deletebutton">Delete</button>
        </div>`
        this.listOfCardsContainer.appendChild(newCard)
    }
    userClicksDeleteButton() {
        this.deleteButton.addEventListener('click', this.deleteCardOnUi.bind(this))
    }
    deleteCardOnUi(event) {
        this.cardToDelete.remove()
        console.log(event, 'I delete card on UI')
    }

    userClicksCloseButton() {
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
        this.formInput = elements.formInput
        this.submitButton = elements.submitButton
        this.listOfCardsContainer = elements.listOfCardsContainer
        this.iid = elements.iid
        this.deleteButton = elements.deleteButton
        this.cardToDelete = elements.cardToDelete
        this.closeCardButton = elements.closeCardButton
    }
    userDoubleClicksToCreatePin() {
        this.imageContainer.addEventListener('dblclick', this.createPinOnUiAndOpenFormField.bind(this))
    }
    createPinOnUiAndOpenFormField(event) {
        console.log('I create Pin on UI')
        let x = event.clientX
        let y = event.clientY
        const newDot = document.createElement('div')
        newDot.innerHTML = `<span class="point" data-card-idONTKNOWHOWTODOIT="${x}${y}" style="position: absolute; top: ${y}px; left: ${x}px; background: #22b2ea; width: 15px; height: 15px; border: solid 0.1px; border-radius: 5px;"></div>`
        document.querySelector('body').appendChild(newDot)
        this.formField.removeAttribute('style')

        const newCard = document.createElement('div')
        newCard.setAttribute('class', 'card border mt-1 rounded-0')
        newCard.innerHTML = `<div class="card-body d-flex justify-content-end" id="${this.iid}">
        <button type="submit" class="btn btn-primary btn-sm rounded-0" id="closecard">X</button>
        </div>
        <p class="p-1 text-left">${this.formInput.value}</p>
        <button type="submit" class="btn btn-primary btn-lg rounded-0" id="deletebutton">Delete</button>
        </div>`
        this.listOfCardsContainer.appendChild(newCard)
        
        const card = new CreateCard({
            formInput: document.querySelector('#forminput'),
            submitButton: document.querySelector('#formsubmitbutton'),
            listOfCardsContainer: document.querySelector('#list'),
            deleteButton: document.querySelector('button#deletebutton.btn.btn-primary.btn-lg.rounded-0'),
            cardToDelete: document.querySelector('button#deletebutton.btn.btn-primary.btn-lg.rounded-0').parentElement.parentElement,
            closeCardButton: document.querySelector('#closecard'),
            iid: Date.now()
        })
        card.userClicksButton()
        card.userClicksDeleteButton()
        card.userClicksCloseButton()
        // localStorage.saveToLocalStorage(x,y)
    }
    
}


class LocalStorage {
    // constructor(x,y,iid,formInput) {
    //     this.x = x
    //     this.y = y
    //     this.iid = iid
    //     this.formInput = formInput
    // }
    saveToLocalStorageiid(iid) {
        console.log(iid,'Aurimas')
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

const pin = new Pin({
    imageContainer: document.querySelector('img'),
    formField: document.querySelector('form')})

pin.userDoubleClicksToCreatePin()

const state = new State(document.querySelector("#activedisabledbutton"))

state.active()


const localStorage = new LocalStorage()

//new

class Utils {
    get generateId() {
        Date.now()
    }
}

const utils = new Utils()

class Point {
    constructor(elements) {
        this.x = elements.x
        this.y = elements.y
        this.id = utils.generateId
        this.imageContainer = elements.imageContainer
        this.formField = elements.formField
        this.formInput = elements.formInput
        this.submitButton = elements.submitButton
        this.listOfCardsContainer = elements.listOfCardsContainer
        this.iid = elements.iid
        this.deleteButton = elements.deleteButton
        this.cardToDelete = elements.cardToDelete
        this.closeCardButton = elements.closeCardButton
    }
}
class Card {
    constructor(elements) {
        this.pointId = elements.pointId
        this.text = elements.text
        this.id = utils.generateId
        this.formInput = elements.formInput
        this.submitButton = elements.submitButton
        this.listOfCardsContainer = elements.listOfCardsContainer
        this.deleteButton = elements.deleteButton
        this.cardToDelete = elements.cardToDelete
        this.closeCardButton = elements.closeCardButton
    }
}
class Annotations {
    constructor() {
        this.points = localStorage.get('points') || []
        this.cards = localStorage.get('cards') || []
        this.activePoint = null;
        this.activeCards = [];
    }
    addPoint(x,y) {
        let point = new Point(x,y)
        this.points.push(point)
        localStorage.set('points', this.points)
        this.activePoint = point.id;
    }
    addCard(text) {
        if(!this.activePoint) {
            return;
        }
        let card = new Card(this.activePoint, text)
        this.cards.push(card)
        localStorage.set('cards', this.cards)
    }
    clickPoint(pointId) {
        this.activePoint = pointId
        this.activeCards = this.getCards(pointId) // sitas tik siap sau, kolkas nzn ar bus naudinga
        this.drawCards(this.activeCards)
    }
    getCards(pointId) {
        this.cards.filter(card => card.pointId === pointId)
    }
    drawPoints() {
        this.points.forEach(point => {
            let el = document.createElement('div')
            el.setAttribute('data-x', point.x)
            el.setAttribute('data-y', point.y)
            el.setAttribute('data-id', point.id)
            document.querySelector('design-area').append(el)
        })
    }
    drawCards(cards) {
        // pirmiausia reikes istrinti visa html is korteliu sidebare pries piesiant is naujo
        cards.forEach(card => {
            el = this.drawCard(card);
            document.querySelector('cards-sidebar').append(el)
        })
    }
    drawCard(card) {
        let el = document.createElement('div')
        el.setAttribute('data-point-id', card.pointId)
        el.setAttribute('data-card-id', card.id)
        el.innerHTML = `... some html and ${card.text}...`;
        return el;
    }
}
let annotations = Annotations()
annotations.drawPoints()
document.querySelectorAll('.point').forEach(point => {
    //persiduot id reikia
    point.addEventListener('click', annotations.clickPoint)
})
document.addEventListener('dbclick', annotations.clickPoint)