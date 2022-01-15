const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

const DOT_DASH = {
  '10': '.',
  '11': '-',
};

// Убирает нули в начале буквы
function removeStartNulls (str) {
while (str.startsWith('00')) {
  str = str.slice(2);
};
return str;
}

// Возвращает букву в виде азбуки Морзе
function decodeBinLetterToMorse (str) {
let arr = [];
while (str) {
  let letter = str.slice(0,2);
  str = str.slice(2);
  arr.push(DOT_DASH[letter]);
};
return arr.join('');
}

// Основная функция
function decode(expr) {
let res = '';

while (expr) {
  let letterBin = expr.slice(0,10);
  expr = expr.slice(10);

  letterBin = removeStartNulls(letterBin);
  
  if (letterBin == '**********') {
    res += ' '
  } else {
    res += MORSE_TABLE[decodeBinLetterToMorse(letterBin)];
  };
};
  
return res;
};

module.exports = {
    decode
}