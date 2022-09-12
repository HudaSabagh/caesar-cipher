const form = document.getElementById('form');
const messageField = document.getElementById('message');
const outputField = document.getElementById('output');
const shiftField = document.getElementById('shift-select');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

alphabet.forEach((char, index) => {
    const shift = (index + 1);
    const opt = document.createElement('option');
    opt.value = shift;
    opt.innerHTML = shift;
    shiftField.appendChild(opt);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = messageField.value;
    const shift = parseInt(shiftField.value);
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const position = alphabet.indexOf(char);
        let encryptedChar = char;

        if (position === -1) {
            // ignore
        } else {
            // replace
            let newIndex = (position + shift) % alphabet.length;
            encryptedChar = alphabet[newIndex];
        }

        encryptedMessage += encryptedChar;
    }

    outputField.innerText = encryptedMessage;
});

document.getElementById('form-decode').addEventListener('submit', (event) => {
    event.preventDefault();
    const messageField = document.getElementById('encrypted');
    const message = messageField.value;
    const outputCleartext = document.getElementById('output-cleartext');
    let decryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const position = alphabet.indexOf(char);
        const shift = parseInt(shiftField.value);
        let decryptedChar = char;

        if (position === -1) {
            // ignore
        } else {
            // replace
            let newIndex = position - shift;

            if (newIndex < 0) {
                newIndex += alphabet.length;
            }

            decryptedChar = alphabet[newIndex];
        }

        decryptedMessage += decryptedChar;
    }

    outputCleartext.innerText = decryptedMessage;
});


