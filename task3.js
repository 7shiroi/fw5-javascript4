function divideAndSort(number) {
  if (typeof number != "number" || number <= 0) {
    console.log("Input Parameter Salah");
  } else {
    const text = number.toString();
    const arrNum = text.split(/0+/); //gunakan regex buat nangkap multiple 0
    console.log(arrNum.map((x) => x.split("").sort().join("")).join(""));
  }
}

// divideAndSort(9207199254740991);
// divideAndSort(-9207199254740991);
// divideAndSort(927100092740351);
// divideAndSort(0);
// divideAndSort("2130312540213");

function divideAndSortNoRegex(number) {
  if (typeof number != "number" || number <= 0) {
    console.log("Input Parameter Salah");
  } else {
    const text = number.toString();
    const arrNum = text.split(0);
    //hasil array ada string kosong, tapi tidak masalah karena nanti di join kan menjadi string
    console.log(arrNum.map((x) => x.split("").sort().join("")).join(""));
  }
}

divideAndSortNoRegex(9207199254740991);
divideAndSortNoRegex(-9207199254740991);
divideAndSortNoRegex(927100092740351);
divideAndSortNoRegex(0);
divideAndSortNoRegex("2130312540213");
