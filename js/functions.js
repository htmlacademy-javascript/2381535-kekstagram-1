const isPalindrom = (words) => {
  words = words.toLowerCase().replaceAll(' ', '');
  const wordsReverse = words.split('').reverse().join('');
  return words === wordsReverse ? 'Это палиндром' : 'Это не палиндром';
};
isPalindrom('Кекс');

const extractNumbers = (string) => {
  let numbers = '';
  if (typeof(string) === 'number') {
    return +string;
  }
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      numbers += string.at(i);
    }
  }
  return +numbers;
};
extractNumbers('Агент 007');

const generationAddress = (string, minLength, pad) => {
  const result = string;
  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
    return actualPad + result;
  }
  return result;
};
generationAddress('1', 4, '0');

const isLengthString = (string, length) => string.length <= length;
isLengthString('Это длинная строка', 13);
