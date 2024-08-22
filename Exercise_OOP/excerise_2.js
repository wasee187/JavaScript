const address_1 = createAddress('2C', 'Lappeenranta', 53850);
const address_2 = new CreateAddress('2B', 'Lappeenranta', 53850);

//factory object 
function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode,
    }
}

for (let key in address_1)
    console.log(key, address_1[key]);



//constructor function 
function CreateAddress(street, city, zipcode){
    this.street = street,
    this.city = city,
    this.zipCode = zipcode
}

for (let key in address_2)
    console.log(key, address_2[key]);