const address_1 = {
    street: 2,
    city: `lappeenranta`,
    zipCode : 53850
}
function showAddress(address){
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address_1); 