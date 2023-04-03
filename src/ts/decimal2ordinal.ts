/**
  Converts a decimal number to its corresponding ordinal representation.
  @param num - The decimal number to be converted.
  @returns - The ordinal representation of the input number as a string.
  @throws - If the input is not a positive integer.
 */

function decimal2ordinal(num: number): string {
  const MODULUS_10 = num % 10,
    MODULUS_100 = num % 100;
  if (isNaN(num) || num % 1 || num <= 0)
    throw "Enter a integer number greater than 0";
  if ([11, 12, 13].includes(MODULUS_100)) return `${num}th`;
  switch (MODULUS_10) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

export default decimal2ordinal;
