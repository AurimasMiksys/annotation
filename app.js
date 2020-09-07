class CreateCard {
    constructor(elements, x, y) {
        this.formInput = elements.formInput
        this.submitButton = elements.submitButton
        this.listOfCardsContainer = elements.listOfCardsContainer
        this.x = y
        this.y = y
        this.iid = Date.now()
        
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
}

class DeleteCard {
    constructor(deleteButton) {
        this.deleteButton = deleteButton
    }
    userClicksToDeleteCardButton(){
        this.deleteButton.addEventListener('click', this.whenUserClicksToDeleteCard.bind(this))
    }

    whenUserClicksToDeleteCard(event) {
        console.log('hello')
        // if (this.clickedItem.classList.contains(`'${this.deleteButton}'`)) {
        //     this.clickedItem.remove()
    }
}


//App

//Create Card
const card = new CreateCard({
    formInput: document.querySelector('#forminput'),
    submitButton: document.querySelector('#formsubmitbutton'),
    listOfCardsContainer: document.querySelector('#list')
    
})

card.userClicksButton()

const deleteCard = new DeleteCard({
    deleteButton: document.querySelector('.btn-lg')
})

deleteCard.userClicksToDeleteCardButton()
deleteCard.whenUserClicksToDeleteCard()