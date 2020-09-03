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
        this.formSubmitButton.addEventListener('click', userSubmitForm) 
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


class UiReadListOfDots {

} 

class UiReadListOfCards {

}

class CreateClosedot {

}

class CreateCloseDeleteCard extends EventListeners {
    constructor() {
        super()
        this.submitForm()
    }

    userSubmitForm(event) {
        this.userSubmitForm.preventDefault()
        console.log(this.userSubmitForm.event.target)
        
    }
     
    
}

class StateActiveDisabled {

}

const test = new CreateCloseDeleteCard





