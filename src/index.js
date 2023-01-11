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
    // write your solution here
    let result = [];
	for (let i = 0; i < expr.length; i = i + 10) {
		result.push(expr.slice(i, i + 10));
	}

	for (let i = 0; i < result.length; i++) {
		if (result[i] == '**********') {
			result[i] = ' ';
			continue;
		}

		let symbol = '';

		for (let j = 0; j < 10; j = j + 2) {
			if (result[i][j] + result[i][j + 1] == '10') {
				symbol += '.';
			} else if (result[i][j] + result[i][j + 1] == '11') {
				symbol += '-';
			}
		}

		result[i] = MORSE_TABLE[symbol];
	}


	return result.join('');
}

module.exports = {
    decode
}