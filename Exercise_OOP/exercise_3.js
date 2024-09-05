const address_1 = new CreateAddress('2C', 'Lappeenranta', 53850);
const address_2 = new CreateAddress('2C', 'Lappeenranta', 53850);



//constructor function 
function CreateAddress(street, city, zipcode){
    this.street = street,
    this.city = city,
    this.zipCode = zipcode
}

function areEqual(address_1, address_2){
    return address_1.street === address_2.street && 
    address_1.city === address_2.city && 
    address_1.zipCode === address_2.zipCode;

}
//check if te address 
function areSame(address_1, address_2)
{
    return address_1 === address_2;
}
console.log(areEqual(address_1, address_2));
console.log(areSame(address_1, address_2));