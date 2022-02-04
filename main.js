// Problem - 1  = anaToVori  

function anaToVori(anaUnit = 1) {

    if (typeof anaUnit != "number") {
        return "Please input a Valid Unit"
    }
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
        return ' Please Give a Valid Number '
    } else if (unitSingara <= 0 || unitSomoca <= 0 || unitJilapi <= 0) {
        return ' Please Use Positive Number '
    } //handdle Error

    const singaraPrice = singaraPerUnitPrice * unitSingara;
    const somocaPrice = somocaPerUnitPrice * unitSomoca;
    const jilapiPrice = jilapiPerUnitPrice * unitJilapi;

    const gettotalPrice = singaraPrice + somocaPrice + jilapiPrice;
    return gettotalPrice;


}

const subTotal = pandaCost();



// problem -3  picnicBudget

function picnicBudget(joinMembers = 10) {
    if (typeof joinMembers != "number") {
        return `tell me total joining members number`;
    }
    if (joinMembers <= 0) {
        return 'Please Gives a Positive Value'
    }
    const budgetForFristHundred = 5000;
    const budgetForSecondHundred = 4000;
    const budgetForThridHundred = 3000;

    if (joinMembers <= 100) {
        const totalBudgetForFristHundred = joinMembers * budgetForFristHundred;
        return totalBudgetForFristHundred;
    } else if (joinMembers <= 200) {
        const frist100Budget = 100 * budgetForFristHundred;
        const nextTwoHundred = joinMembers - 100;
        const budgetOfNextTwoHundred = nextTwoHundred * budgetForSecondHundred;
        const totalBudgetForNextTwoHundred = budgetOfNextTwoHundred + frist100Budget;
        return totalBudgetForNextTwoHundred;

    } else {
        const frist100Budget = 100 * budgetForFristHundred;
        const budgetOfNextTwoHundred = 100 * budgetForSecondHundred;
        const moreThanTwoHundred = joinMembers - 200;
        const budgetForMoreThanTwoHundred = moreThanTwoHundred * budgetForThridHundred;
        const calc_TotalBudget = budgetForMoreThanTwoHundred + frist100Budget + budgetOfNextTwoHundred;
        return calc_TotalBudget;

    }

}

let getTotalBudget = picnicBudget();


// problem - 4 = oddFriend

function oddFriend(fNames = `hello`) {
    if (typeof fNames == 'string') {
        return `input the arr`;
    } else if (typeof fNames == 'number') {
        return `input the arr`;
    }

    for (const friend of friends) {
        if (friend.length % 2 != 0) {
            return friend;
        }
    }

}
const friends = ['Tonmoy', 'Anisul', 'Sumita', 'Nayema', 'tawhid', 'Fida', 'JKR', 'Jhankar', 'Ashik', 'Bappi'];
const result = oddFriend(friends);