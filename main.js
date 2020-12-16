let yaay = 'Uwielbiam Java Script';
let proud = 'Jestem świetnym programistą';

function parameters (yaay, proud) {
    if (yaay.length > proud.length) {
        return yaay;
    } else if (yaay.length == proud.length) {
        return ("ta sama długość")
    } else {
        return proud
    }
}

console.log(parameters(yaay, proud));