function reverseWords(text) {
  if (typeof text != "string" || text.length == 0) {
    return "Input parameter salah";
  }

  let i = 0,
    j = 0,
    x = 0;
  let hasil = "";
  const arrayhasil = [];

  while (i < text.length) {
    if (i + 1 == text.length) {
      if (x != i) {
        var sementara = "";
        temp = i - x;
        for (a = 0; a <= temp; a++) {
          sementara += text[x];
          x++;
        }
        arrayhasil[j] = sementara;
      }
    } else if (text[i] == " ") {
      if (i != x) {
        var sementara = "";
        temp = i - x;
        for (a = 0; a < temp; a++) {
          sementara += text[x];
          x++;
        }
        arrayhasil[j] = sementara;
        j++;
        x++;
      } else {
        x++;
      }
    }
    i++;
  }

  c = j;
  while (c >= 0) {
    hasil += arrayhasil[c];
    if (c > 0) {
      hasil += " ";
    }
    c--;
  }
  return hasil;
}

console.log(reverseWords("coba text ini"));
// console.log(reverseWords(""));
// console.log(reverseWords(12431));
// console.log(reverseWords([]));
// console.log(reverseWords("123 321 213"));
// console.log(reverseWords("double  space"));
