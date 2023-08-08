const vehicleOne = {
    brand: 'Chevrolet',
    model: 'Camaro',
    type: 'car',
    year: 2021,
    colour: 'yellow',
    registration: {
        city: 'Perth',
        state: 'Western Australia',
        country: 'Australia'
    }
}

myVehicle(vehicleOne);

function myVehicle({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';

    document.getElementById("car").innerHTML = message;
}