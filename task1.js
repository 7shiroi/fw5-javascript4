//palindrom
function palindrom(text) {
  if (typeof text != "string" || text.length == 0) {
    return "Input parameter salah";
  }
  text = text.toUpperCase();
  reversed = "";
  for (i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }

  if (text == reversed) {
    return "Palindrom";
  } else {
    return "Bukan Palindrom";
  }
}

// console.log(palindrom("macam"));
console.log(palindrom("MAcam"));
// console.log(palindrom("121"));
// console.log(palindrom(121));
// console.log(palindrom(""));
