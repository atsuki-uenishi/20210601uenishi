//1
const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (item, i) {
    return array.indexOf(item) === i;
})

console.log(result);

//2
const leapyear = (year) => {
    if(year % 4 === 0 && year % 100 !== 0) {
        console.log('うるう年');
    } else if(year % 400 === 0) {
        console.log('うるう年');
    } else {
        console.log('うるう年ではない');
    }
}

leapyear(2020);
leapyear(2021);