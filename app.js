class CreateCard {
    constructor(elements) {
        this.formInput = elements.formInput
        this.submitButton = elements.submitButton
        this.listOfCardsContainer = elements.listOfCardsContainer
        this.x = elements.x
        this.y = elements.y
        this.iid = Date.now()
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
    constructor(imageContainer) {
        this.imageContainer = imageContainer
    }
    userDoubleClicksToCreatePin() {
        this.imageContainer.addEventListener('dblclick', this.createPinOnUi.bind(this))
    }
    createPinOnUi(event) {
        console.log('Create Pin on UI')
    }
}

//App
//Create Card
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
card.userClicksCloseButton()


const pin = new Pin({
    imageContainer: document.querySelector('img.img-fluid')
})

pin.userDoubleClicksToCreatePin()