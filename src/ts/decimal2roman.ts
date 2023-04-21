/**
  This function uses a map that relates decimal numbers to their respective Roman numerals.
    @param num - The decimal number to be converted to Roman numeral.
    @return - A string representing the Roman numeral.
    @throws - An error message if the input is not a positive integer or greater than 4000.
 */

function decimal2roman(num: number): string {
  const RomanNumeralsMap: Map<number, string> = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]);
  let romanNum: string = "";

  if (isNaN(num) || num % 1 || num <= 0 || num >= 4000)
    throw "Enter an integer greater than 0 and less than 4000";

  while (num > 0) {
    for (let [key, value] of RomanNumeralsMap) {
      if (num >= key) {
        romanNum += value;
        num -= key;
        break;
      }
    }
  }

  return romanNum;
}

export default decimal2roman;
