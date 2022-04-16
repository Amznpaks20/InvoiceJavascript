const washCarBtn = document.getElementById('washCar')
const mowLawnBtn = document.getElementById('mowLawn')
const pullWeedsBtn = document.getElementById('pullWeeds')
const sendInvoiceBtn = document.getElementById('sendInvoice')
const detailsTable = document.getElementById('details')
const paymentType = document.getElementById('paymentType')
const totalAmount = document.getElementById('totalAmount')

let servicesPurchased = []

totalAmount.textContent = `$${calculateTotal(servicesPurchased)}`

//Buttonevents
document.addEventListener('click', function (e) {
    if (e.target.id === 'removePullWeeds') {
        deleteItem(e.target.id)
    }
    else if (e.target.id === 'removeMowLawn') {
        deleteItem(e.target.id)
    }
    else if (e.target.id === 'removeWashCar') {
        deleteItem(e.target.id)
    }
})

washCarBtn.addEventListener('click', () => {
    const value = { details: 'Wash Car', price: 10, remove: 'removeWashCar' }

    if (!isServiceIncluded(servicesPurchased, value.details)) {
        servicesPurchased.push(value)
        renderDetails(servicesPurchased)
    }


})

mowLawnBtn.addEventListener('click', () => {
    const value = { details: 'Mow Lawn', price: 20, remove: 'removeMowLawn' }

    if (!isServiceIncluded(servicesPurchased, value.details)) {
        servicesPurchased.push(value)
        renderDetails(servicesPurchased)
    }


})

pullWeedsBtn.addEventListener('click', () => {
    const value = { details: 'Pull Weeds', price: 30, remove: 'removePullWeeds' }

    if (!isServiceIncluded(servicesPurchased, value.details)) {
        servicesPurchased.push(value)
        renderDetails(servicesPurchased)
    }


})


//Function

function calculateTotal(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i].price
    }
    return total
}

function deleteItem(key) {
    let tempArray = []

    for (let i = 0; i < servicesPurchased.length; i++) {
        if (!(servicesPurchased[i].remove === key)) {
            tempArray.push(servicesPurchased[i])
        }
    }

    servicesPurchased = tempArray
    renderDetails(servicesPurchased)
}


function isServiceIncluded(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].details === value) {
            return true
        }
    }
    return false
}


function renderDetails(array) {
    detailsTable.innerHTML = ""
    if (array.length) {
        for (let i = 0; i < array.length; i++) {
            detailsTable.innerHTML += `<tr> <td class="task">${array[i].details} <button id=${array[i].remove} class="remove">Remove</button></td>
    <td class="price">$${array[i].price}</td></tr>`
        }
    }
    totalAmount.textContent = `$${calculateTotal(array)}`
}
