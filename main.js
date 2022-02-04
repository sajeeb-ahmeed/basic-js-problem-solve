// Problem - 1  = anaToVori  

function anaToVori(anaUnit) {

    if (typeof anaUnit != "number") {
        return "Please Enter a Unit Number"
    }
    if (anaUnit <= 0) {
        return 'Please Gives a Positive Unit'
    }
    let perVori = 16; // 16 ana =1 vori
    let calcAnaToVori = anaUnit / perVori;
    return calcAnaToVori;

}
const getVori = anaToVori();



//Problem -2 =  pandaCost