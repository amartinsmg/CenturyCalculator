class CenturyCalculator {

  public static main(): void {

    //Constatns that store elements that will be often read or changed

    const Form: HTMLFormElement = document.querySelector("#input-form"),
      YearInput: HTMLInputElement = document.querySelector("#year-input"),
      CenturyOutputDiv: HTMLDivElement = document.querySelector("#century-output");

    //Set initial value of YearInput as the current year

    const Today = new Date();
    YearInput.defaultValue = Today.getFullYear().toString();

    //Call century function and write the result in document

    function calculate(): void {
      try {
        const YEAR = parseInt(YearInput.value),
          CENTURY = CenturyCalculator.century(YEAR);
        CenturyOutputDiv.textContent =
          document.documentElement.lang === "en"
            ? CenturyCalculator.ordinalNum(CENTURY)
            : CenturyCalculator.romanNumerals(CENTURY);
      } catch {
        CenturyOutputDiv.textContent = null;
      }
    }

    //Call main function when Enter key is pressed or the calculate button is clicked

    YearInput.onkeydown = (e) => {
      if (e.keyCode === 13) {
        return void 0;
      }
    };

    Form.onsubmit = (e) => {
      calculate();
      e.preventDefault();
    };
  }

  //Convert the input number to Roman numerals

  private static romanNumerals(num: number): string {
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

    if (isNaN(num) || num % 1 !== 0 || num <= 0 || num >= 4000) {
      throw "Enter an integer greater than 0 and less than 4000";
    }

    while (num > 0) {
      for (let key of RomanNumeralsMap.keys()) {
        if (num >= key) {
          romanNum += RomanNumeralsMap.get(key);
          num -= key;
          break;
        }
      }
    }

    return romanNum;
  };

  //Convert the input number into ordinal number

  private static ordinalNum(num: number): string {
    const MODULE10 = num % 10,
      MODULE100 = num % 100;
    if (isNaN(num) || num % 1 !== 0 || num <= 0) {
      throw "Enter a integer number greater than 0";
    }
    if (MODULE100 === 11 || MODULE100 === 12 || MODULE100 === 13) {
      return `${num}th`;
    }
    switch (MODULE10) {
      case 1:
        return `${num}st`;
      case 2:
        return `${num}nd`;
      case 3:
        return `${num}rd`;
      default:
        return `${num}th`;
    }
  };

  //Calculate the century

  private static century(year: number): number {
    const CENTURY =
      year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
    return CENTURY;
  }
}

window.onload = CenturyCalculator.main;
