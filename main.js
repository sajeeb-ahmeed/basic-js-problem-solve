// Problem - 1  = anaToVori  

function anaToVori(anaUnit) {

    if (typeof anaUnit != "number") {
        return "Please Enter a Unit Number"
    } //handdle Error
    if (anaUnit <= 0) {
        return 'Please Gives a Positive Unit'
    }
    let perVori = 16;
    let calcAnaToVori = anaUnit / perVori;
    return calcAnaToVori;

}
const getVori = anaToVori();



//Problem -2 =  pandaCost

function pandaCost(unitSingara = 1, unitSomoca = 1, unitJilapi = 1) {

    const singaraPerUnitPrice = 7;
    const somocaPerUnitPrice = 10;
    const jilapiPerUnitPrice = 15;

    if (
        typeof unitSingara != 'number' ||
        typeof unitSomoca != 'number' ||
        typeof unitJilapi != 'number'
    ) {
        return ' Please Give a Valid Unit '
    } else if (unitSingara <= 0 || unitSomoca <= 0 || unitJilapi <= 0) {
        return ' Please Use Positive Unit '
    }
    const singaraPrice = singaraPerUnitPrice * unitSingara;
    const somocaPrice = somocaPerUnitPrice * unitSomoca;
    const jilapiPrice = jilapiPerUnitPrice * unitJilapi;

    const totalPrice = singaraPrice + somocaPrice + jilapiPrice;
    return totalPrice;


}
const subTotal = pandaCost();