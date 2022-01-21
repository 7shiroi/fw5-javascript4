function divideAndSort(number) {
  if (typeof number != "number" || number <= 0) {
    console.log("Input Parameter Salah");
  } else {
    const text = number.toString();
    const arrNum = text.split(/0+/); //gunakan regex buat nangkap multiple 0
    console.log(arrNum.map((x) => x.split("").sort().join("")).join(""));
  }
}

divideAndSort(9207199254740991);
divideAndSort(-9207199254740991);
divideAndSort(927100092740351);
divideAndSort(0);
divideAndSort("2130312540213");
