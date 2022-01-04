//Function the transforms the number into Roman numerals

function romanNumerals(num) {

//    console.log(num);  /* to test */

    var intermediary = [], romanNum = "";
    if (isNaN(num) || !Number.isInteger(num) || num <= 0 || num >= 4000) {
        return null;
    };
    num = num.toString();
    for (let i of num) {
        intermediary.push(Number(i));
    };

    //    console.log(intermediary) /*to test*/

    intermediary = intermediary.reverse();
    if (intermediary.length == 4) {
        switch (intermediary[3]) {
            case 3:
                romanNum += "MMM";
                break;
            case 2:
                romanNum += "MM";
                break;
            case 1:
                romanNum += "M";
                break;
            default:
                romanNum += "";
        };
        intermediary.pop();
    }
    if (intermediary.length == 3) {
        switch (intermediary[2]) {
            case 9:
                romanNum += "CM";
                break;
            case 8:
                romanNum += "DCCC";
                break;
            case 7:
                romanNum += "DCC";
                break;
            case 6:
                romanNum += "DC";
                break;
            case 5:
                romanNum += "D";
                break;
            case 4:
                romanNum += "CD";
                break;
            case 3:
                romanNum += "CCC";
                break;
            case 2:
                romanNum += "CC";
                break;
            case 1:
                romanNum += "C";
                break;
            default:
                romanNum += "";
        };
        intermediary.pop();
    }
    if (intermediary.length == 2) {
        switch (intermediary[1]) {
            case 9:
                romanNum += "XC";
                break;
            case 8:
                romanNum += "LXXX";
                break;
            case 7:
                romanNum += "LXX";
                break;
            case 6:
                romanNum += "LX";
                break;
            case 5:
                romanNum += "L";
                break;
            case 4:
                romanNum += "XL";
                break;
            case 3:
                romanNum += "XXX";
                break;
            case 2:
                romanNum += "XX";
                break;
            case 1:
                romanNum += "X";
                break;
            default:
                romanNum += "";
        };
        intermediary.pop();
    }
    switch (intermediary[0]) {
        case 9:
            romanNum += "IX";
            break;
        case 8:
            romanNum += "VIII";
            break;
        case 7:
            romanNum += "VII";
            break;
        case 6:
            romanNum += "VI";
            break;
        case 5:
            romanNum += "V";
            break;
        case 4:
            romanNum += "IV";
            break;
        case 3:
            romanNum += "III";
            break;
        case 2:
            romanNum += "II";
            break;
        case 1:
            romanNum += "I";
            break;
        default:
            romanNum += "";
    };
    return romanNum;
};


//Function that calculates the century

function century(year) {
    var cent;
    year = parseInt(year);

    //console.log(year) /*to test*/

    year % 100 == 0 ? cent = year / 100 : cent = Math.floor(year / 100) + 1
    return cent;
};

//console.log(century(1315)); /* to test */
//console.log(romanNumerals(century(1945))); /* to test */


var yearInput = document.getElementById("yearInput");
var calculate = document.getElementById("Calculate-button");
var form = document.getElementById("Input-form");


//Initial value of yearInput = current year

var today = new Date;

//console.log(today + "\n" + today.getFullYear().toString()); /* to test */

yearInput.value = today.getFullYear().toString();


//Function that call century() and write the result in document

function calculator() {
    input = yearInput.value;
    document.getElementById("textOutput").innerHTML = romanNumerals(century(input));
};


//Call calculator() when Enter key is pressed or the calculate btton is clicked

yearInput.onkeydown = (event) => {
    if (event.keyCode == 13) {
        calculator();
    }
}
calculate.onclick = () => calculator();
form.onsubmit = () => {
    return false;
}