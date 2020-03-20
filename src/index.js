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

function decode(expr) {
    let result = "";
    let words = expr.split("**********"); 
    words.forEach(word => { 
        result += (result === "" ? "" : " ");
        let letters = word.match(/.{10}/g); 
        letters.forEach(letter => {
            let key = "";
            let codes = parseInt(letter).toString().match(/.{2}/g);
            codes.forEach(code => {
                key += (code === "10" ? "." : "-");
            });
        	result += MORSE_TABLE[key];
        });
       	
    });
    return result;
}

module.exports = {
    decode
}