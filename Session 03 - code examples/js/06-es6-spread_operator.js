const myVehicle = {
    brand: 'Chevrolet',
    model: 'Camaro',
    colour: 'yellow'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    colour: 'gunmetal'
}

const myUpdatedVehicle = {...myVehicle, type: updateMyVehicle['type']}

// Write the result to the 'car' element
document.getElementById('car').textContent = JSON.stringify(myUpdatedVehicle);