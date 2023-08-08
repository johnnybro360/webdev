
const vehicleOne = {
    brand: 'Chevrolet',
    model: 'Camaro',
    type: 'car',
    year: 2021,
    colour: 'yellow'
}

myVehicle(vehicleOne);

function myVehicle({type, colour, brand, model}) {
    const message = 'My ' + type + ' is a ' + colour + ' ' + brand + ' ' + model + '.';

    document.getElementById("car").innerHTML = message;
}