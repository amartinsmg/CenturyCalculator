const YEARINPUT = document.getElementById("year-input"),
CALCULATEBUTTON = document.getElementById("calculate-button"),
FORM = document.getElementById("input-form");

//Initial value of YEARINPUT as the current year

const Today = new Date;

//console.log(Today + "\n" + Today.getFullYear().toString()); //Ok

YEARINPUT.value = Today.getFullYear().toString();


//Function the transforms the number into Roman numerals

function romanNumerals(num) {

    //console.log(num);  //Ok
    
    if (isNaN(num) || !Number.isInteger(num) || num <= 0 || num >= 4000) {
        return null;
    };

    const INTERMEDIARY = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

/*     for(let i of INTERMEDIARY){
        console.log(i);
    } //Ok */

    let romanNum = "";

    while(num > 0){
        for(let i of INTERMEDIARY){
            if(num >= i[0]){
                romanNum += i[1];
                num -= i[0];

                //console.log(romanNum, "\n", num); //Ok

                break;
            }
        }
    }

    return romanNum;
};

//console.log(romanNumerals(315)); //Ok


//Function that calculates the century

function century(year) {
    let cent;
    year = parseInt(year);

    //console.log(year) //Ok

    year % 100 == 0 ? cent = year / 100 : cent = Math.floor(year / 100) + 1
    return cent;
};

//console.log(century(1315)); //Ok
//console.log(romanNumerals(century(1945))); //Ok


//Function that calls century() and write the result in document

function calculate() {
    let input = YEARINPUT.value;
    document.getElementById("text-output").innerHTML = romanNumerals(century(input));
};


//Call calculate() when Enter key is pressed or the calculate btton is clicked

YEARINPUT.onkeydown = (e) => {
    if (e.keyCode == 13) {
        calculate();
    }
}
CALCULATEBUTTON.onclick = () => {
    calculate();
    return false;
}