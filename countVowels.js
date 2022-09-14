function countVowels(str) {
  let vowels = 'aeiou';
  let count = 0;

  for (let x of str) {
    if (vowels.includes(x)) {
      count += 1;
    }
  }

  return count;
}

console.log(countVowels('Sapnachoudhary'));
