class UiSelectors {
    constructor() {
        this.listOfCardsContainer = document.querySelector('#list')
        this.displayDot = document.querySelector('#dot')
        this.cardCloseButton = document.querySelectorAll('#closecard')
        this.deleteCardButton = document.querySelector('#deletebutton')
        this.formInput = document.querySelector('#forminput')
        this.formSubmitButton = document.querySelector('#formsubmitbuhgjhkjhktton')
        this.activeDisabledButton = document.querySelector('#activedisabledbutton')
    }
    
}
class EventListeners extends UiSelectors {
    constructor() {
        super()
    }

    domContentLoadedWhenUserVisits() {
        document.addEventListener('DOMContentLoaded', readDots)
    }
    openDot() {
        this.displayDot.addEventListener('click', showOpenDotReadCard)
    }
    createDot() {
        this.displayDot.addEventListener('dblclick', createDotOpenFormToSubmitToCreateNewCard)
    }
    submitForm() {
        this.formSubmitButton.addEventListener('click', this.userSubmitForm.bind(this))
    }
    userCloseCard() {
        this.cardCloseButton.addEventListener('click', userCloseCard)
    }
    userDeleteCard() {
        this.deleteCardButton.addEventListener('click', userDeleteCard)
    }
    userActiveSate() {
        this.activeDisabledButton.addEventListener('click', userClicksToActivateSate)
    }

}

class UiReadListOfDots {}
class UiReadListOfCards {}
class CreateClosedot {}
class CreateCloseDeleteCard extends EventListeners {
    constructor() {
        super()
        this.submitForm()


    }
    userSubmitForm(event) {
        event.preventDefault()
        console.log('form value:', this.formInput.value)

    }
}
class StateActiveDisabled {}


//Utilities
const create = new CreateCloseDeleteCard()