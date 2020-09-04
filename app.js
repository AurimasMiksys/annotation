class CreateCard {
    constructor(formInput) {
        this.formInput = formInput
        
    }
    userClicksButton() {
        const submitButton = document.querySelector('#formsubmitbutton')
        submitButton.addEventListener('click', this.createNewCardOnUi)
    }
    
    createNewCardOnUi(event) {
        event.preventDefault()
        const listOfCardsContainer = document.querySelector('#list')
        const newCard = document.createElement('div')
        newCard.setAttribute('class', 'card border mt-1 rounded-0')
        newCard.innerHTML = `<div class="card-body d-flex justify-content-end">
        <button type="submit" class="btn btn-primary btn-sm rounded-0" id="closecard">X</button>
        </div>   
        <p class="p-1 text-left">${this.formInput.value}</p>
        <button type="submit" class="btn btn-primary btn-lg rounded-0" id="deletebutton">Delete</button>
        </div>`
        listOfCardsContainer.appendChild(newCard)   
    }
}


//App

//Create Card
const card = new CreateCard(document.querySelector('#forminput'))

card.userClicksButton()