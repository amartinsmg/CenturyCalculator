//Function the transforms the number into Roman numerals

function roman(num) {
    var inter = [], romanNum = "";
    if (!isNaN(num) && (Number.isInteger(num) && num > 0 && num < 4000)) {
        num = num.toString();
        for (var i = 0; i < num.length; i++) {
            inter.push(num[i]);
        };
        for (var i = 0; i < inter.length; i++) {
            inter[i] = Number(inter[i]);
        }
        inter = inter.reverse();
        if (inter.length == 4) {
            switch (inter[3]) {
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
            inter.pop();
        }
        if (inter.length == 3) {
            switch (inter[2]) {
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
            inter.pop();
        }
        if (inter.length == 2) {
            switch (inter[1]) {
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
            inter.pop();
        }
        switch (inter[0]) {
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
};


//Function that calculates the century

function century(year) {
    var cent;
    year = parseInt(year);
    if (year % 100 == 0) {
        cent = year / 100
    } else {
        cent = year / 100
        cent = Math.floor(cent) + 1
    };
    return (roman(cent));
};


//Principal function

function calculator() {
    x = document.getElementById("yearInput").value;
    document.getElementById("text1").innerHTML = century(x);
};

//console.log(century(315)); /* to test */


var today = new Date, thisYear = today.getFullYear();

//console.log(today + "\n" + thisYear.toString()); /* to test */

var inicialValue = document.getElementById("yearInput");
inicialValue.value = thisYear.toString();