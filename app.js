class Utils {
    get generateId() {
        return Date.now()
    }
}
const utils = new Utils()

class Point {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.id = utils.generateId
    }
}
class Card {
    constructor(pointId, text) {
        this.pointId = pointId
        this.text = text
        this.id = utils.generateId
    }
}
class Annotations {
    constructor() {
        this.points = JSON.parse(localStorage.getItem('points')) || []
        this.cards = JSON.parse(localStorage.getItem('cards')) || []
        this.activePoint = null
        this.activeCards = []
    }
    addPoint(event) {
        console.log('add point')
        let point = new Point(event.clientX, event.clientY)

        let x = event.clientX
        let y = event.clientY
        console.log(event.clientX, event.clientY)
        console.log(point.id)
            

        this.points.push(point)
        localStorage.setItem('points', JSON.stringify(this.points))
        this.activePoint = point.id
        console.log(point.id, 'cia point id turi buti')
        this.drawPoints(this.activePoint, x, y)
    }
    addCard(event) {
        event.preventDefault()
        console.log('Add card')
        if(!this.activePoint) {
           return
        }
    

        console.log(this.activePoint, 'cia turi buti this active point')
        let card = new Card(this.activePoint, document.querySelector('input#forminput.form-control').value)
        let text = document.querySelector('input#forminput.form-control').value
        this.cards.push(card)
        localStorage.setItem('cards', JSON.stringify(this.cards))
        this.drawCard(this.activePoint, text)
    }

    clickPoint(event) {
        // this.activePoint = pointId

    //     this.activeCards = this.getCards(pointId) // sitas tik siap sau, kolkas nzn ar bus naudinga
        // this.drawCards(this.activePoint)

        console.log(event, 'cia clickPoint active point event testuoju dabar')
    }
    // getCards(pointId) {
    //     this.cards.filter(card => card.pointId === pointId)
    // }

    drawPoints(point, x, y) {

            let el = document.createElement('div')
            el.innerHTML = `<span class="point" data-card-id="${point}" style="position: absolute; top: ${y}px; left: ${x}px; background: #22b2ea; width: 15px; height: 15px; border: solid 0.1px; border-radius: 5px;"></div>`
            document.querySelector('body').appendChild(el)
            document.querySelector('form').removeAttribute('style')
            el.addEventListener('click', this.clickPoint.bind(this))

    }
    
    // drawCards(cards) {
    //     // pirmiausia reikes istrinti visa html is korteliu sidebare pries piesiant is naujo
    //     cards.forEach(card => {
    //         el = this.drawCard(card);
    //         document.querySelector('cards-sidebar').append(el)
    // //     })
    // }
    drawCard(cardid, text) {
        const el = document.createElement('div')
         el.setAttribute('class', 'card border mt-1 rounded-0')
         el.innerHTML = `<div class="card-body d-flex justify-content-end" data-card-id="${cardid}">
         <button type="submit" class="btn btn-primary btn-sm rounded-0" id="closecard">X</button>
         </div>
         <p class="p-1 text-left">${text}</p>
         <button type="submit" class="btn btn-primary btn-lg rounded-0" id="deletebutton">Delete</button>
         </div>`
         document.querySelector('#list').appendChild(el)
    }
}

let annotations = new Annotations()

document.querySelector('img').addEventListener('dblclick', annotations.addPoint.bind(annotations))
document.querySelector('button.btn.btn-primary.rounded-0').addEventListener('click', annotations.addCard.bind(annotations))







// document.querySelectorAll('.point').forEach(point => {
//     addEventListener('dblclick', annotations.addPoint)

// point.addEventListener('click', annotations.clickPoint)
// })
// document.addEventListener('dbclick', annotations.clickPoint)