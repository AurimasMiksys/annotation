class UiSelectors {
    listOfCardsContainer = document.querySelector('#list')
    displayDot = document.querySelector('#dot')
    cardCloseButton = document.querySelectorAll('#closecard')
    deleteCardButton = document.querySelector('#deletebutton')
    formInput = document.querySelector('#forminput')
    formSubmitButton = document.querySelector('#formsubmitbutton')
    activeDisabledButton = document.querySelector('#activedisabledbutton')
}
class EventListeners extends UiSelectors {
    constructor(formInput) {
        super(formInput)
        this.formInput = formInput.value.bind(this)
        console.log(this.formInput.value)
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
        this.formSubmitButton.addEventListener('click', this.userSubmitForm)
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
    constructor(formInput) {
        super(formInput)
        this.submitForm()


    }
    userSubmitForm(event) {
        event.preventDefault()

    }
}
class StateActiveDisabled {}


//Utilities
const create = new CreateCloseDeleteCard()