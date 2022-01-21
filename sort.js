function sort(arrNum) {
  do {
    x = 0;

    for (i = 0; i < arrNum.length - 1; i++) {
      if (arrNum[i] > arrNum[i + 1]) {
        temp = arrNum[i];
        arrNum[i] = arrNum[i + 1];
        arrNum[i + 1] = temp;
        x++;
      }
    }
  } while (x > 0);
  return arrNum;
}

console.log(sort([5, 2, 6, 3, 7]));
