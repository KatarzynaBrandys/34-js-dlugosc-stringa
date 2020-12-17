let yaay = 'Uwielbiam Java Script';
let proud = 'Jestem świetnym programistą';

function parameters (par1, par2) {
    if (par1.length > par2.length) {
        return par1;
    } else if (par1.length == par2.length) {
        return ("ta sama długość")
    } else {
        return par2
    }
}

console.log(parameters(yaay, proud));