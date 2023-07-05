const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');

textInput.addEventListener('keyup', e => {
  const input = e.target.value;
  console.log(input);
  const words = input.split(' ');
  const output = words.map(word => translateWord(word)).join(' ');
  textOutput.innerText = output;
});

const translateWord = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const ending = 'ay';

  if (word.trim() === '' || word.length === 1) {
    return "Input can't be translated";
  }

  if (vowels.includes(word[0])) {
    return word + 'way';
  } else if (vowels.includes(word[1])) {
    return word.substring(1) + word[0] + ending;
  } else {
    return word.substring(2) + word.substring(0, 2) + ending;
  }
};