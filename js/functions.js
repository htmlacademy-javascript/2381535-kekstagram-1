function getPalindrom (words) {
  words = words.toLowerCase().replaceAll(' ', '');
  const wordsReverse = words.split('').reverse().join('');
  return words === wordsReverse ? 'Это палиндром' : 'Это не палиндром';
}

function getString (string) {
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
}

// function generationAddress (string, minLength, addSymbol) {
//   const difference = minLength - string.length;
//   if (difference <= 0) {
//     return string;
//   }

//   return addSymbol.slice(difference % addSymbol.length) + addSymbol.repeat(difference / addSymbol.length) + string
// }

const generationAddress = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
    return actualPad + result;
  }
  return result;
}


function isLengthString (string, length) {
  return string.length <= length;
}

