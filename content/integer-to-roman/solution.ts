export function intToRoman(num: number): string {
  let numeral = "";

  while (num > 0) {
    if (num >= 1000) {
      numeral += "M";
      num -= 1000;
    } else if (num >= 900) {
      numeral += "CM";
      num -= 900;
    } else if (num >= 500) {
      numeral += "D";
      num -= 500;
    } else if (num >= 400) {
      numeral += "CD";
      num -= 400;
    } else if (num >= 100) {
      numeral += "C";
      num -= 100;
    } else if (num >= 90) {
      numeral += "XC";
      num -= 90;
    } else if (num >= 50) {
      numeral += "L";
      num -= 50;
    } else if (num >= 40) {
      numeral += "XL";
      num -= 40;
    } else if (num >= 10) {
      numeral += "X";
      num -= 10;
    } else if (num >= 9) {
      numeral += "IX";
      num -= 9;
    } else if (num >= 5) {
      numeral += "V";
      num -= 5;
    } else if (num >= 4) {
      numeral += "IV";
      num -= 4;
    } else if (num >= 1) {
      numeral += "I";
      num -= 1;
    }
  }

  return numeral;
}
