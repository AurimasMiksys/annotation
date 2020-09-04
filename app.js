class CreateCard {
    constructor(elements) {
        this.formInput = elements.formInput
        this.submitButton = elements.submitButton
        this.listOfCardsContainer = elements.listOfCardsContainer
        
    }
    userClicksButton() {
        this.submitButton.addEventListener('click', this.createNewCardOnUi.bind(this))
    }
    
    createNewCardOnUi(event) {
        event.preventDefault()
        const newCard = document.createElement('div')
        newCard.setAttribute('class', 'card border mt-1 rounded-0')
        newCard.innerHTML = `<div class="card-body d-flex justify-content-end">
        <button type="submit" class="btn btn-primary btn-sm rounded-0" id="closecard">X</button>
        </div>   
        <p class="p-1 text-left">${this.formInput.value}</p>
        <button type="submit" class="btn btn-primary btn-lg rounded-0" id="deletebutton">Delete</button>
        </div>`
        this.listOfCardsContainer.appendChild(newCard)   
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